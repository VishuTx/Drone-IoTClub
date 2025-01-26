// src/components/magicui/blur-fade.tsx

import React, { useState, useEffect } from 'react';

interface BlurFadeProps {
  children: React.ReactNode;
  delay: number;
  inView: boolean;
}

const BlurFade: React.FC<BlurFadeProps> = ({ children, delay, inView }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), delay * 1000); // Apply delay
    } else {
      setIsVisible(false);
    }
  }, [inView, delay]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}
    >
      {children}
    </div>
  );
};

export { BlurFade };
