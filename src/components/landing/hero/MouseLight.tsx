import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const MouseLight: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    
    // Set initial position to center right for the spotlight effect behind the robot
    if (typeof window !== 'undefined') {
      x.set(window.innerWidth * 0.75);
      y.set(window.innerHeight * 0.5);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const background = useTransform(
    [springX, springY],
    ([latestX, latestY]) => `radial-gradient(800px circle at ${latestX}px ${latestY}px, rgba(255,255,255,0.06), transparent 60%)`
  );

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
      style={{ background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};
