import React, { useState, useEffect, useRef, ReactNode } from 'react';

const useIntersectionObserver = (delay: number) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setInView(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return { ref, inView };
};

interface FadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 500,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const { ref, inView } = useIntersectionObserver(delay);

  const directionClasses = {
    up: 'translate-y-4',
    down: '-translate-y-4',
    left: 'translate-x-4',
    right: '-translate-x-4',
  };

  const style = {
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all ease-out ${className} ${
        inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

interface FadeInListProps {
  children: ReactNode[];
  className?: string;
  itemDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const FadeInList: React.FC<FadeInListProps> = ({
  children,
  className = '',
  itemDelay = 100,
  ...rest
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <FadeIn delay={index * itemDelay} {...rest}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
}; 