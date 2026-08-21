'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { SERVICES } from '@/app/constants';

export const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="md:hidden" style={{ borderTop: '1px solid rgba(17,17,16,0.1)' }}>
      {SERVICES.map((service, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={service.num} style={{ borderBottom: '1px solid rgba(17,17,16,0.1)' }}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-4">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    color: 'rgba(17,17,16,0.35)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {service.num}
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    color: '#111110',
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </span>
              </span>
              {isOpen ? <Minus size={16} color="#111110" /> : <Plus size={16} color="#111110" />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    className="pb-6 pr-8"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      color: 'rgba(17,17,16,0.55)',
                      lineHeight: 1.8,
                    }}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
