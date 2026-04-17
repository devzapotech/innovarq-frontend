import { motion } from 'motion/react';

const LINES = [
  { text: 'Diseñamos espacios', italic: false, delay: 0.5, mb: 'mb-4' },
  { text: 'que transforman', italic: true, delay: 0.65, mb: 'mb-6' },
  { text: 'la forma de vivir', italic: false, delay: 0.8, mb: 'mb-8' },
];

export const HeroHeadline = () => (
  <>
    {LINES.map(({ text, italic, delay, mb }) => (
      <div key={text} className={`overflow-hidden ${mb}`}>
        <motion.h1
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: italic ? 'italic' : 'normal',
            color: italic ? '#f1ede4' : '#ffffff',
            lineHeight: 1.05,
            fontSize: 'clamp(2.8rem, 7vw, 7rem)',
          }}
        >
          {text}
        </motion.h1>
      </div>
    ))}
  </>
);
