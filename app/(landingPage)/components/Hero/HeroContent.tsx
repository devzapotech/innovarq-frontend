import { motion } from 'motion/react';
import type { HeroContentProps } from '@/app/props';
import { HeroLabel } from './HeroLabel';
import { HeroHeadline } from './HeroHeadline';
import { HeroCTAs } from './HeroCTAs';

export const HeroContent = ({ textY, opacity, onNav }: HeroContentProps) => (
  <motion.div
    className="relative z-10 flex flex-col justify-end h-full pb-24 md:pb-32 px-6 md:px-16 lg:px-24 max-w-350 mx-auto"
    style={{ y: textY, opacity }}
  >
    <HeroLabel />
    <HeroHeadline />
    <HeroCTAs onNav={onNav} />
  </motion.div>
);
