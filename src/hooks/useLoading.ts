import { useState, useEffect } from 'react';

export interface UseLoadingOptions {
  initialDelay?: number;
  minLoadingTime?: number;
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const { initialDelay = 0, minLoadingTime = 1000 } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    setStartTime(Date.now());
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const finishLoading = () => {
    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsed);

    if (remainingTime > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    } else {
      setIsLoading(false);
    }
  };

  return { isLoading, finishLoading };
};

// Hook específico para simular carregamento de seções
export const useSectionLoading = (delay: number = 800) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}; 