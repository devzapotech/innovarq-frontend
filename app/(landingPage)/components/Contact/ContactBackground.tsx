import { motion } from 'motion/react';

export const ContactBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute rounded-full"
        style={{ width: '600px', height: '600px', backgroundColor: 'rgba(17,17,16,0.05)', top: '-100px', right: '-100px' }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{ width: '400px', height: '400px', backgroundColor: 'rgba(17,17,16,0.07)', bottom: '-50px', left: '-100px' }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  );
}
