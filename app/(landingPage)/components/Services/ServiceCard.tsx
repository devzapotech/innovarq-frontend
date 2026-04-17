import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceCardProps } from '@/app/props';

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 md:p-10 cursor-default transition-all duration-500 hover:bg-[#111110]"
      style={{ borderTop: '1px solid rgba(17,17,16,0.1)' }}
    >
      {/* Number */}
      <p
        className="mb-8 transition-colors duration-500 group-hover:text-[rgba(130,134,111,0.3)]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', color: 'rgba(17,17,16,0.2)', letterSpacing: '0.1em' }}
      >
        {service.num}
      </p>

      {/* Icon */}
      <div className="mb-6">
        <Icon size={28} className="transition-colors duration-500" style={{ color: '#82866f' }} />
      </div>

      {/* Title */}
      <h3
        className="mb-4 transition-colors duration-500 group-hover:text-[#f1ede4]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.4rem', color: '#111110', lineHeight: 1.2 }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="transition-colors duration-500 group-hover:text-[rgba(241,237,228,0.55)]"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(17,17,16,0.55)', lineHeight: 1.8 }}
      >
        {service.desc}
      </p>

      {/* Hover arrow */}
      <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#82866f', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Más info
        </span>
        <ArrowUpRight size={12} color="#82866f" />
      </div>
    </motion.div>
  );
};
