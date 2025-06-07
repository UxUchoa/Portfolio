'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
}

export function TextShimmer({
  children,
  as: Component = 'span',
  className,
  duration = 2,
}: TextShimmerProps) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={cn(
        'relative inline-block',
        'bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600',
        'bg-clip-text text-transparent',
        'bg-[length:200%_100%]',
        className
      )}
      animate={{
        backgroundPosition: ['0%', '200%', '0%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </MotionComponent>
  );
} 