import { motion } from 'motion/react';
import type { ProcessStepCardProps } from '@/app/props';

export const ProcessStepCard = ({ step, index }: ProcessStepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="relative flex items-center justify-center shrink-0"
          style={{ width: '60px', height: '60px', border: '1px solid rgba(17,17,16,0.3)' }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '1.3rem', color: '#111110' }}>
            {step.num}
          </span>
          {/* Animated dot */}
          <motion.div
            className="absolute"
            style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111110', top: '-3px', right: '-3px' }}
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
          />
        </div>

        {/* Connector line to next (mobile) */}
        <div className="flex-1 md:hidden" style={{ height: '1px', backgroundColor: 'rgba(17,17,16,0.15)' }} />
      </div>

      {/* Content */}
      <h3
        className="mb-4"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.8rem', color: '#111110', lineHeight: 1.1 }}
      >
        {step.title}
      </h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(17,17,16,0.6)', lineHeight: 1.9 }}>
        {step.desc}
      </p>
    </motion.div>
  );
}
