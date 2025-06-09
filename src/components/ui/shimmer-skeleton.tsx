import React from 'react';
import { cn } from '../../lib/utils';

interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'none';
}

export function ShimmerSkeleton({
  className,
  width = '100%',
  height = '1rem',
  rounded = 'md',
  ...props
}: ShimmerSkeletonProps) {
  const radiusVariants = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
    none: 'rounded-none',
  };

  return (
    <div
      className={cn('shimmer-bg', radiusVariants[rounded], className)}
      style={{
        width,
        height,
      }}
      {...props}
    />
  );
}

export function VideoCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
      <ShimmerSkeleton height="210px" rounded="none" />
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <ShimmerSkeleton width="80px" height="14px" />
          <ShimmerSkeleton width="50px" height="14px" />
        </div>
        <ShimmerSkeleton width="75%" height="28px" className="mb-2" />
        <ShimmerSkeleton width="100%" height="16px" className="mb-1" />
        <ShimmerSkeleton width="90%" height="16px" className="mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          <ShimmerSkeleton width="60px" height="24px" rounded="full" />
          <ShimmerSkeleton width="80px" height="24px" rounded="full" />
          <ShimmerSkeleton width="50px" height="24px" rounded="full" />
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-600">
          <ShimmerSkeleton width="100px" height="20px" />
        </div>
      </div>
    </div>
  );
}

export function ExperienceListSkeleton() {
  return (
    <div className="space-y-8">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <ShimmerSkeleton width="120px" height="16px" className="mb-2" />
          </div>
          <div className="md:w-3/4">
            <ShimmerSkeleton width="60%" height="24px" className="mb-2" />
            <ShimmerSkeleton width="40%" height="20px" className="mb-3" />
            <ShimmerSkeleton width="100%" height="16px" className="mb-1" />
            <ShimmerSkeleton width="80%" height="16px" />
          </div>
        </div>
      ))}
    </div>
  );
} 