import React from 'react';
import { ShimmerSkeleton } from './shimmer-skeleton';

export function HeroSectionSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <ShimmerSkeleton width="150px" height="20px" />
            <ShimmerSkeleton width="90%" height="48px" />
            <ShimmerSkeleton width="80%" height="48px" className="mb-4" />
            <ShimmerSkeleton width="100%" height="24px" />
            <ShimmerSkeleton width="100%" height="24px" />
          </div>
          <div className="flex flex-wrap gap-4">
            <ShimmerSkeleton width="160px" height="52px" rounded="full" />
            <ShimmerSkeleton width="180px" height="52px" rounded="full" />
          </div>
          <div className="flex items-center space-x-6 pt-4">
            <ShimmerSkeleton width="28px" height="28px" rounded="full" />
            <ShimmerSkeleton width="28px" height="28px" rounded="full" />
            <ShimmerSkeleton width="28px" height="28px" rounded="full" />
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <ShimmerSkeleton width="288px" height="288px" rounded="lg" />
        </div>
      </div>
    </div>
  );
}

export function AboutSectionSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <ShimmerSkeleton width="250px" height="36px" className="mx-auto mb-4" />
        <ShimmerSkeleton width="60%" height="24px" className="mx-auto" />
        <ShimmerSkeleton width="50%" height="20px" className="mx-auto mt-4" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          {/* Journey Skeleton */}
          <div>
            <ShimmerSkeleton width="200px" height="28px" className="mb-6" />
            <div className="space-y-4">
              <ShimmerSkeleton width="100%" height="20px" />
              <ShimmerSkeleton width="95%" height="20px" />
              <ShimmerSkeleton width="100%" height="20px" />
              <ShimmerSkeleton width="90%" height="20px" />
              <ShimmerSkeleton width="80%" height="20px" />
            </div>
          </div>
          {/* Quick Facts Skeleton */}
          <div>
            <ShimmerSkeleton width="180px" height="28px" className="mb-6" />
            <div className="grid grid-cols-2 gap-4">
              <ShimmerSkeleton width="120px" height="24px" />
              <ShimmerSkeleton width="150px" height="24px" />
              <ShimmerSkeleton width="140px" height="24px" />
              <ShimmerSkeleton width="160px" height="24px" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {/* Skills Skeleton */}
          <div>
            <ShimmerSkeleton width="150px" height="28px" className="mb-6" />
            <div className="space-y-6">
              {[...Array(6)].map((_, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <ShimmerSkeleton width={`${60 + i * 5}%`} height="20px" />
                    <ShimmerSkeleton width="40px" height="20px" />
                  </div>
                  <ShimmerSkeleton width="100%" height="12px" rounded="full" />
                </div>
              ))}
            </div>
          </div>
          {/* Tools Skeleton */}
          <div>
            <ShimmerSkeleton width="120px" height="28px" className="mb-6" />
            <div className="flex flex-wrap gap-3">
              {[...Array(10)].map((_, i) => (
                <ShimmerSkeleton key={i} width={`${60 + Math.random() * 40}px`} height="40px" rounded="lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 