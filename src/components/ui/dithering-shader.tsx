'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type DitheringType = '2x2' | '4x4' | '8x8';
type DitheringShape = 'wave';

type Rgba = [number, number, number, number];

type DitheringShaderProps = React.ComponentProps<'canvas'> & {
  shape?: DitheringShape;
  type?: DitheringType;
  colorBack?: string;
  colorFront?: string;
  pxSize?: number;
  speed?: number;
};

const bayerMatrices: Record<DitheringType, number[][]> = {
  '2x2': [
    [0, 2],
    [3, 1],
  ],
  '4x4': [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ],
  '8x8': [
    [0, 48, 12, 60, 3, 51, 15, 63],
    [32, 16, 44, 28, 35, 19, 47, 31],
    [8, 56, 4, 52, 11, 59, 7, 55],
    [40, 24, 36, 20, 43, 27, 39, 23],
    [2, 50, 14, 62, 1, 49, 13, 61],
    [34, 18, 46, 30, 33, 17, 45, 29],
    [10, 58, 6, 54, 9, 57, 5, 53],
    [42, 26, 38, 22, 41, 25, 37, 21],
  ],
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function parseColor(color: string, fallback: Rgba): Rgba {
  const normalized = color.trim().toLowerCase();

  if (normalized === 'transparent') return [0, 0, 0, 0];

  if (normalized.startsWith('#')) {
    const raw = normalized.slice(1);
    const hex =
      raw.length === 3
        ? raw
            .split('')
            .map((char) => char + char)
            .join('')
        : raw;

    if (hex.length === 6) {
      return [
        Number.parseInt(hex.slice(0, 2), 16),
        Number.parseInt(hex.slice(2, 4), 16),
        Number.parseInt(hex.slice(4, 6), 16),
        255,
      ];
    }
  }

  const rgbaMatch = normalized.match(/^rgba?\(([^)]+)\)$/);
  if (rgbaMatch) {
    const parts = rgbaMatch[1].split(',').map((part) => part.trim());
    const alpha = parts[3] === undefined ? 1 : Number(parts[3]);

    return [
      clamp(Number(parts[0]), 0, 255),
      clamp(Number(parts[1]), 0, 255),
      clamp(Number(parts[2]), 0, 255),
      Math.round(clamp(alpha) * 255),
    ];
  }

  return fallback;
}

function getWaveValue(x: number, y: number, width: number, height: number, time: number) {
  const nx = width > 0 ? x / width - 0.5 : 0;
  const ny = height > 0 ? y / height - 0.5 : 0;
  const distance = Math.sqrt(nx * nx + ny * ny);

  const horizontal = Math.sin((nx * 7.5 + time * 0.8) * Math.PI * 2);
  const vertical = Math.sin((ny * 5.5 - time * 0.55) * Math.PI * 2);
  const radial = Math.sin((distance * 11 - time * 1.1) * Math.PI * 2);
  const vignette = clamp(1 - distance * 1.65);

  return clamp((horizontal + vertical + radial) / 6 + 0.5 + vignette * 0.18);
}

export function DitheringShader({
  shape = 'wave',
  type = '8x8',
  colorBack = 'transparent',
  colorFront = '#2447ff',
  pxSize = 3,
  speed = 0.6,
  className,
  style,
  ...props
}: DitheringShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const matrix = bayerMatrices[type];
    const matrixSize = matrix.length;
    const thresholdScale = matrixSize * matrixSize;
    const backColor = parseColor(colorBack, [0, 0, 0, 0]);
    const frontColor = parseColor(colorFront, [110, 231, 183, 255]);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pixelSize = Math.max(2, Math.floor(pxSize));
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.ceil(rect.width / pixelSize));
      height = Math.max(1, Math.ceil(rect.height / pixelSize));
      canvas.width = width;
      canvas.height = height;
    };

    const draw = (timestamp = 0) => {
      if (!width || !height) resize();

      const image = context.createImageData(width, height);
      const data = image.data;
      const motionSpeed = prefersReducedMotion ? speed * 0.18 : speed;
      const time = (timestamp / 1000) * motionSpeed;

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const sourceValue = shape === 'wave' ? getWaveValue(x, y, width, height, time) : 0;
          const threshold = (matrix[y % matrixSize][x % matrixSize] + 0.5) / thresholdScale;
          const color = sourceValue > threshold ? frontColor : backColor;
          const index = (y * width + x) * 4;

          data[index] = color[0];
          data[index + 1] = color[1];
          data[index + 2] = color[2];
          data[index + 3] = color[3];
        }
      }

      context.putImageData(image, 0, 0);

      animationFrame = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    resizeObserver.observe(canvas);
    resize();
    draw();

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [colorBack, colorFront, pxSize, shape, speed, type]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-dithering-shader="true"
      className={cn('absolute inset-0 h-full w-full', className)}
      style={{ imageRendering: 'pixelated', ...style }}
      {...props}
    />
  );
}
