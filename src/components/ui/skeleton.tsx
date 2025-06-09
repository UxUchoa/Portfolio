import React from 'react';
import { ShimmerSkeleton } from './shimmer-skeleton';

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`} />
);

export const HeroSectionSkeleton = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <ShimmerSkeleton width="120px" height="20px" />
            <ShimmerSkeleton width="80%" height="48px" className="mb-2" />
            <ShimmerSkeleton width="60%" height="48px" />
            <ShimmerSkeleton width="90%" height="24px" className="mt-4" />
            <ShimmerSkeleton width="70%" height="24px" />
          </div>
          <div className="flex flex-wrap gap-4">
            <ShimmerSkeleton width="180px" height="50px" rounded="2xl" />
            <ShimmerSkeleton width="180px" height="50px" rounded="2xl" />
          </div>
          <div className="flex items-center space-x-6 pt-4">
            <ShimmerSkeleton width="24px" height="24px" rounded="full" />
            <ShimmerSkeleton width="24px" height="24px" rounded="full" />
            <ShimmerSkeleton width="24px" height="24px" rounded="full" />
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
            <ShimmerSkeleton width="288px" height="288px" rounded="2xl" />
        </div>
      </div>
    </div>
);


export const AboutSectionSkeleton = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <ShimmerSkeleton width="250px" height="32px" className="mx-auto mb-4" />
        <ShimmerSkeleton width="350px" height="24px" className="mx-auto" />
        <ShimmerSkeleton width="300px" height="16px" className="mx-auto mt-4" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Coluna Esquerda Skeleton */}
        <div className="space-y-8">
          <div>
            <ShimmerSkeleton width="200px" height="24px" className="mb-6" />
            <div className="space-y-4">
                <ShimmerSkeleton width="100%" height="20px" />
                <ShimmerSkeleton width="95%" height="18px" />
                <ShimmerSkeleton width="90%" height="18px" />
                <ShimmerSkeleton width="80%" height="18px" />
            </div>
          </div>
          <div>
            <ShimmerSkeleton width="180px" height="24px" className="mb-6" />
            <div className="grid grid-cols-2 gap-4">
                <ShimmerSkeleton width="150px" height="20px" />
                <ShimmerSkeleton width="150px" height="20px" />
                <ShimmerSkeleton width="150px" height="20px" />
                <ShimmerSkeleton width="150px" height="20px" />
            </div>
          </div>
        </div>

        {/* Coluna Direita Skeleton */}
        <div className="space-y-8">
            <div>
                <ShimmerSkeleton width="150px" height="24px" className="mb-6" />
                <div className="space-y-6">
                    {[...Array(6)].map((_, i) => <ShimmerSkeleton key={i} width="100%" height="36px" />)}
                </div>
            </div>
             <div>
                <ShimmerSkeleton width="120px" height="24px" className="mb-6" />
                <div className="flex flex-wrap gap-3">
                     {[...Array(8)].map((_, i) => <ShimmerSkeleton key={i} width="80px" height="36px" rounded="lg" />)}
                </div>
            </div>
        </div>
      </div>
    </div>
);


export const ProjectCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
    <Skeleton className="w-full h-40 mb-4" />
    <Skeleton className="w-3/4 h-6 mb-2" />
    <Skeleton className="w-1/2 h-4" />
  </div>
);

export const ExperienceCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
    <Skeleton className="w-1/4 h-6 mb-2" />
    <Skeleton className="w-1/2 h-5 mb-4" />
    <Skeleton className="w-full h-4 mb-2" />
    <Skeleton className="w-full h-4" />
  </div>
); 