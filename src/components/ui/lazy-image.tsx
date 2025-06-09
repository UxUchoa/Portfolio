import React, { useState, useEffect, useRef } from 'react';
import { ShimmerSkeleton } from './shimmer-skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setIsLoading(false);
              setHasError(false);
              if (imgRef.current) {
                imgRef.current.src = src;
              }
            };
            img.onerror = () => {
              setIsLoading(false);
              setHasError(true);
            };
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [src]);

  const placeholder = <ShimmerSkeleton className={`w-full h-full ${className}`} />;
  
  const errorFallback = (
    <div className={`w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}>
      <span className="text-red-500 text-xs text-center p-2">Failed to load image</span>
    </div>
  );

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && <div className="absolute inset-0">{placeholder}</div>}
      {hasError && <div className="absolute inset-0">{errorFallback}</div>}
      <img
        ref={imgRef}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoading || hasError ? 'opacity-0' : 'opacity-100'} ${className}`}
        {...props}
      />
    </div>
  );
}; 