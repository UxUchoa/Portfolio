import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className, 
  width = "100%", 
  height = "20px" 
}) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md",
        className
      )}
      style={{ width, height }}
    />
  );
};

// Skeleton específico para cartões de projetos
export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
      {/* Skeleton da imagem */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-600">
        <Skeleton className="w-full h-full rounded-none" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Skeleton categoria e ano */}
        <div className="flex items-center justify-between mb-3">
          <Skeleton width="80px" height="16px" />
          <Skeleton width="40px" height="16px" />
        </div>
        
        {/* Skeleton título */}
        <Skeleton width="70%" height="24px" className="mb-3" />
        
        {/* Skeleton descrição */}
        <div className="mb-4 space-y-2">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="90%" height="16px" />
          <Skeleton width="80%" height="16px" />
        </div>
        
        {/* Skeleton tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton width="60px" height="24px" className="rounded-full" />
          <Skeleton width="80px" height="24px" className="rounded-full" />
          <Skeleton width="50px" height="24px" className="rounded-full" />
        </div>
        
        {/* Skeleton botões */}
        <div className="flex items-center justify-between mt-auto">
          <Skeleton width="80px" height="20px" />
          <Skeleton width="90px" height="20px" />
        </div>
      </div>
    </div>
  );
};

// Skeleton para seção de experiência
export const ExperienceCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <Skeleton width="100px" height="16px" className="mb-2" />
      </div>
      <div className="md:w-3/4">
        <Skeleton width="60%" height="24px" className="mb-1" />
        <Skeleton width="40%" height="20px" className="mb-3" />
        <div className="space-y-2">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="95%" height="16px" />
          <Skeleton width="85%" height="16px" />
        </div>
      </div>
    </div>
  );
};

// Skeleton para seção sobre
export const AboutSectionSkeleton: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Título */}
      <div className="text-center mb-16">
        <Skeleton width="200px" height="32px" className="mx-auto mb-4" />
        <Skeleton width="300px" height="20px" className="mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna da esquerda */}
        <div>
          <div className="space-y-4 mb-8">
            <Skeleton width="100%" height="20px" />
            <Skeleton width="95%" height="20px" />
            <Skeleton width="90%" height="20px" />
            <Skeleton width="85%" height="20px" />
          </div>
          
          {/* Skills */}
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <Skeleton width="120px" height="16px" />
                  <Skeleton width="30px" height="16px" />
                </div>
                <Skeleton width="100%" height="8px" className="rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Coluna da direita */}
        <div>
          <Skeleton width="100%" height="400px" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}; 