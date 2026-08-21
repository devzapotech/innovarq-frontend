import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { CONTACT_WHATSAPP } from '@/app/constants';

export const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = [
      `¡Hola Innovarq! Mi nombre es ${form.nombre}.`,
      `Email: ${form.email}`,
      form.telefono ? `📞 Teléfono: ${form.telefono}` : null,
      `Mensaje: ${form.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n');

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(CONTACT_WHATSAPP(message), '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 300,
    color: '#111110',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(17,17,16,0.3)',
    padding: '10px 0',
  };

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
    >
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div
            className="flex items-center justify-center mb-6"
            style={{ width: '64px', height: '64px', border: '1px solid #82866f' }}
          >
            <Send size={24} color="#82866f" />
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#111110', marginBottom: '1rem' }}>
            ¡Mensaje recibido!
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(17,17,16,0.65)', lineHeight: 1.8 }}>
            Nos pondremos en contacto contigo en menos de 24 horas para comenzar a transformar tu espacio.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" style={labelStyle}>Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full outline-none transition-all duration-300 focus:border-[#82866f]"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full outline-none transition-all duration-300 focus:border-[#82866f]"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="telefono" style={labelStyle}>Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              placeholder="+54  0000-0000"
              className="w-full outline-none transition-all duration-300 focus:border-[#82866f]"
              style={inputStyle}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              value={form.mensaje}
              onChange={handleChange}
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full outline-none transition-all duration-300 focus:border-[#82866f] resize-none"
              style={inputStyle}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex items-center justify-center gap-3 px-8 py-4 self-center md:self-start transition-all duration-300 cursor-pointer hover:bg-[#111110] hover:text-[#f1ede4]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
              color: '#111110',
              border: '1px solid rgba(17,17,16,0.4)',
            }}
          >
            {loading ? 'Enviando...' : 'Enviar mensaje'}
            {!loading && <Send size={13} />}
          </button>
        </form>
      )}
    </motion.div>
  );
}
