import { useState, useEffect } from 'react';

export const useScrollPosition = (threshold: number = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setIsScrolled(currentPosition > threshold);
    };

    // Call it initially in case the page is reloaded halfway down
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled, scrollPosition };
};
