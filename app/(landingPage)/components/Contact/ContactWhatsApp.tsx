import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_WHATSAPP, MESSAGE_TEMPLATE } from '@/app/constants';

export const ContactWhatsApp = () => {
  return (
    <motion.a
      href={CONTACT_WHATSAPP(MESSAGE_TEMPLATE)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 p-6 transition-all duration-300"
      style={{ backgroundColor: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)', textDecoration: 'none' }}
    >
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: '44px', height: '44px', backgroundColor: '#25D366', borderRadius: '50%' }}
      >
        <MessageCircle size={22} color="#ffffff" />
      </div>
      <div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 400, color: '#111110' }}>
          ¿Prefieres WhatsApp?
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 300, color: 'rgba(17,17,16,0.55)', marginTop: '2px' }}>
          Chatea con nosotros ahora mismo
        </p>
      </div>
    </motion.a>
  );
}
