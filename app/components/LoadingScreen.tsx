"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 400 + Math.random() * 1800;

    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 300);
      }
    };
    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-9998 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#f1ede4' }}
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p
          className="tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#82866f', letterSpacing: '0.35em' }}
        >
          Estudio de Arquitectura
        </p>
        <h1
          className="tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, color: '#111110', lineHeight: 1 }}
        >
          INNOVARQ
        </h1>
        <div className="mt-4 mx-auto" style={{ height: '1px', backgroundColor: '#82866f', width: '100%', opacity: 0.4 }} />
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 relative overflow-hidden"
        style={{ width: '200px', height: '1px', backgroundColor: 'rgba(130,134,111,0.2)' }}
      >
        <div
          className="absolute inset-y-0 left-0 transition-none"
          style={{ backgroundColor: '#82866f', width: `${progress}%`, transition: 'width 0.05s linear' }}
        />
      </motion.div>

      {/* Counter */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-4"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#82866f', letterSpacing: '0.15em' }}
      >
        {Math.round(progress)}
      </motion.p>
    </motion.div>
  );
}

export default LoadingScreen;
