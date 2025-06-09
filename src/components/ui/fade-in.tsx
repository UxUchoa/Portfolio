import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right';

interface FadeInProps extends PropsWithChildren {
  duration?: number;
  delay?: number;
  direction?: Direction;
  className?: string;
  isList?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 500,
  delay = 0,
  direction = 'up',
  className,
  isList = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Wait for the delay before starting the animation
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

  const getTransform = (dir: Direction) => {
    switch (dir) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  const style = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : getTransform(direction),
  };

  if (isList) {
    return (
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, index) => (
          <div
            style={{
              ...style,
              transitionDelay: `${index * 100}ms, ${index * 100}ms`
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};


interface FadeInListProps extends PropsWithChildren {
    itemDelay?: number;
    duration?: number;
    direction?: Direction;
    className?: string;
}
  
export const FadeInList: React.FC<FadeInListProps> = ({
    children,
    itemDelay = 150,
    duration = 500,
    direction = 'up',
    className,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getTransform = (dir: Direction) => {
        switch (dir) {
          case 'up': return 'translateY(20px)';
          case 'down': return 'translateY(-20px)';
          case 'left': return 'translateX(20px)';
          case 'right': return 'translateX(-20px)';
          default: return 'translateY(20px)';
        }
      };

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, index) => (
                <div
                    style={{
                        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
                        transitionDelay: `${isVisible ? index * itemDelay : 0}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'none' : getTransform(direction),
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}; 