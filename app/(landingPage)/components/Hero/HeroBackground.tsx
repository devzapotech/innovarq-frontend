import { motion } from 'motion/react';
import Image from 'next/image';
import type { HeroBackgroundProps } from '@/app/props';

export const HeroBackground = ({ imgY }: HeroBackgroundProps) => (
  <motion.div className="absolute inset-0" style={{ y: imgY }}>
    <Image
      src="/imagen principal.webp"
      fill
      alt="Arquitectura contemporánea Innovarq"
      className="w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(to bottom, rgba(17,17,16,0.55) 0%, rgba(17,17,16,0.3) 50%, rgba(17,17,16,0.7) 100%)' }}
    />
  </motion.div>
);
