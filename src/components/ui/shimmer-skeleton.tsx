import React from 'react';

// Função auxiliar simples para combinar classes, removendo a dependência de `cn`
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

interface ShimmerSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

export const ShimmerSkeleton: React.FC<ShimmerSkeletonProps> = ({
  width = '100%',
  height = '1rem',
  className,
  rounded = 'md',
}) => {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={cn('shimmer-bg', roundedClasses[rounded], className)}
      style={{ width, height }}
    />
  );
};

export const VideoCardSkeleton = () => (
    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
      <ShimmerSkeleton height="12rem" rounded="none" />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
            <ShimmerSkeleton width="80px" height="14px" />
            <ShimmerSkeleton width="50px" height="14px" />
        </div>
        <ShimmerSkeleton width="70%" height="24px" className="mb-2" />
        <ShimmerSkeleton width="100%" height="16px" className="mb-1" />
        <ShimmerSkeleton width="100%" height="16px" className="mb-1" />
        <ShimmerSkeleton width="40%" height="16px" className="mb-4 flex-grow" />
        
        <div className="flex flex-wrap gap-2 mb-4">
            <ShimmerSkeleton width="60px" height="24px" rounded="full" />
            <ShimmerSkeleton width="80px" height="24px" rounded="full" />
            <ShimmerSkeleton width="50px" height="24px" rounded="full" />
        </div>

        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-600">
            <ShimmerSkeleton width="100px" height="20px" />
            <ShimmerSkeleton width="120px" height="20px" />
        </div>
      </div>
    </div>
);

export const ExperienceListSkeleton = () => (
    <div className="space-y-8">
        {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                    <ShimmerSkeleton width="120px" height="16px" className="mb-2" />
                </div>
                <div className="md:w-3/4">
                    <ShimmerSkeleton width="60%" height="20px" className="mb-2" />
                    <ShimmerSkeleton width="40%" height="18px" className="mb-3" />
                    <ShimmerSkeleton width="100%" height="14px" className="mb-1" />
                    <ShimmerSkeleton width="80%" height="14px" />
                </div>
            </div>
        ))}
    </div>
); 