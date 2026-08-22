import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_WHATSAPP, CONTACT_TOPICS } from '@/app/constants';

export const ContactForm = () => {
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [detail, setDetail] = useState('');

  const message = `¡Hola! Quiero consultar por ${topic.toLowerCase()}.${detail.trim() ? ` ${detail.trim()}` : ''}`;

  const chipStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    letterSpacing: '0.03em',
    padding: '12px 18px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    backgroundColor: active ? '#111110' : 'transparent',
    color: active ? '#f1ede4' : '#111110',
    border: active ? '1px solid #111110' : '1px solid rgba(17,17,16,0.4)',
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.6rem',
    color: '#111110',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-8"
    >
      {/* Topic */}
      <div>
        <label style={labelStyle}>¿Sobre qué querés consultar?</label>
        <div className="flex flex-wrap gap-2.5">
          {CONTACT_TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              style={chipStyle(topic === t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div>
        <label htmlFor="detalle" style={labelStyle}>
          Contanos un poco más <span style={{ textTransform: 'none', letterSpacing: 'normal', opacity: 0.6 }}>(opcional)</span>
        </label>
        <textarea
          id="detalle"
          name="detalle"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          rows={4}
          placeholder="Ej.: departamento de 60 m² en Palermo, quiero renovar cocina y baño."
          className="w-full outline-none transition-all duration-300 focus:border-[#82866f] resize-none"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 300,
            color: '#111110',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(17,17,16,0.3)',
            padding: '10px 0',
          }}
        />
      </div>

      {/* Preview */}
      <div>
        <label style={labelStyle}>Se abre WhatsApp con este mensaje</label>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 300,
            color: 'rgba(17,17,16,0.75)',
            lineHeight: 1.7,
            backgroundColor: 'rgba(241,237,228,0.55)',
            padding: '16px 20px',
          }}
        >
          {message}
        </p>
      </div>

      {/* Submit */}
      <motion.a
        href={CONTACT_WHATSAPP(message)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 flex items-center gap-4 p-6 w-full md:w-auto self-stretch md:self-start transition-all duration-300"
        style={{ backgroundColor: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)', textDecoration: 'none' }}
      >
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: '44px', height: '44px', backgroundColor: '#25D366', borderRadius: '50%' }}
        >
          <MessageCircle size={22} color="#ffffff" />
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 400, color: '#111110', letterSpacing: '0.05em' }}>
          Escribir por WhatsApp
        </p>
      </motion.a>
    </motion.div>
  );
}
