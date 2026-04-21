import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import type { ValueCardProps } from '@/app/props';

export const ValueCard = ({ value, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group p-10 md:p-12 cursor-default transition-all duration-500 hover:bg-[#111110]"
      style={{ backgroundColor: '#f1ede4' }}
    >
      <CheckCircle
        size={20}
        className="mb-8 transition-colors duration-500"
        style={{ color: '#82866f' }}
      />
      <h3
        className="mb-5 transition-colors duration-500 group-hover:text-[#f1ede4]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.6rem', color: '#111110', lineHeight: 1.2 }}
      >
        {value.title}
      </h3>
      <p
        className="transition-colors duration-500 group-hover:text-[rgba(241,237,228,0.55)]"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'rgba(17,17,16,0.55)', lineHeight: 1.85 }}
      >
        {value.desc}
      </p>
    </motion.div>
  );
}
