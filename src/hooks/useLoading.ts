import { useState, useEffect } from 'react';

/**
 * Hook to manage a simple loading state that turns off after a specified delay.
 * @param {boolean} initialLoadingState The initial loading state.
 * @param {number} delay The delay in milliseconds before loading is set to false.
 * @returns {boolean} The current loading state.
 */
export const useLoading = (initialLoadingState: boolean, delay: number): boolean => {
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  useEffect(() => {
    if (initialLoadingState) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [initialLoadingState, delay]);

  return isLoading;
};

/**
 * Hook to manage the loading state of a section, setting it to true on mount
 * and false after a specified delay.
 * @param {number} delay The delay in milliseconds.
 * @returns {boolean} The loading state of the section.
 */
export const useSectionLoading = (delay: number): boolean => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);
  
      return () => clearTimeout(timer);
    }, [delay]);
  
    return isLoading;
  }; 