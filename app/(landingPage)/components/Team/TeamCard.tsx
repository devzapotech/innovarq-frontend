import { motion } from 'motion/react';
import Image from 'next/image';
import type { TeamCardProps } from '@/app/props';

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Portrait */}
      <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '3/4' }}>
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            width={300}
            height={350}
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(20%)' }}
          />
        </motion.div>
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-100 flex items-end p-6"
          style={{ background: 'linear-gradient(to top, rgba(17,17,16,0.7) 0%, transparent 50%)' }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: '1rem', color: '#f1ede4', lineHeight: 1.5 }}>
            {member.quote}
          </p>
        </div>
      </div>

      {/* Info */}
      <div style={{ borderTop: '1px solid rgba(130,134,111,0.25)', paddingTop: '1.2rem' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.4rem', color: '#111110', lineHeight: 1.2 }}>
          {member.name}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#82866f', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '5px' }}>
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}
