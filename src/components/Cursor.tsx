import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-white/30 md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <div 
        className="pointer-events-none fixed left-0 top-0 z-[-1] h-full w-full opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 163, 255, 0.08), transparent 80%)`
        }}
      />
    </>
  );
};
