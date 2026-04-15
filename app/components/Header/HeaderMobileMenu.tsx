import { motion, AnimatePresence } from 'motion/react';
import { HeaderMobileMenuProps } from '@/app/props';


export const HeaderMobileMenu = ({ links, menuOpen, onNav }: HeaderMobileMenuProps) => (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        className="fixed inset-0 z-99 flex flex-col justify-center items-center"
        style={{ backgroundColor: '#111110' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => onNav(link.href)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.2rem',
                fontWeight: 300,
                color: '#f1ede4',
                letterSpacing: '0.05em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#82866f', letterSpacing: '0.25em' }}
        >
          INNOVARQ © 2026
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);
