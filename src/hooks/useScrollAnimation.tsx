
import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
}: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add timeout for delay if needed
        if (entry.isIntersecting) {
          if (delay > 0) {
            const timeout = setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                observer.unobserve(element);
              }
            }, delay);
            return () => clearTimeout(timeout);
          } else {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref, isVisible };
}
