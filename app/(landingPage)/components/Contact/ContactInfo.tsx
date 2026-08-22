import { motion } from 'motion/react';
import { ContactInfoItems } from './ContactInfoItems';
import { ContactOfficeHours } from './ContactOfficeHours';

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-10"
    >
      <ContactInfoItems />
      <ContactOfficeHours />
    </motion.div>
  );
}
