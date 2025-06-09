import { useState, useEffect } from 'react';

export function useLoading(initialState = true) {
  const [isLoading, setIsLoading] = useState(initialState);
  return { isLoading, setIsLoading };
}

export function useSectionLoading(delay: number) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
} 