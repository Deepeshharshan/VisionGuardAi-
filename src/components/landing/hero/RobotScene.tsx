import React, { Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import { SplineLoader } from './SplineLoader';

// Lazy load Spline to prevent blocking main thread
const Spline = lazy(() => import('@splinetool/react-spline'));

export const RobotScene: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
      {!isLoaded && <SplineLoader />}
      
      <motion.div 
        className="absolute inset-0 w-full h-full z-20 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            onLoad={() => setIsLoaded(true)}
          />
        </Suspense>
      </motion.div>
    </div>
  );
};
