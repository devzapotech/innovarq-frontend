import { motion } from 'motion/react';
import { FooterContactProps } from '@/app/props';


export const FooterContact = ({ addressLines, phone, email, social }: FooterContactProps) => {
  const telHref = `tel:${phone.replace(/[\s()\-]/g, '')}`;

  return (
    <div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', color: '#82866f', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '20px' }}>
        Contacto
      </p>
      <div className="flex flex-col gap-3">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(241,237,228,0.45)', lineHeight: 1.6 }}>
          {addressLines.map((line, i) => (
            <span key={i}>{line}{i < addressLines.length - 1 && <br />}</span>
          ))}
        </p>
        <a href={telHref} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(241,237,228,0.45)', textDecoration: 'none' }}>
          {phone}
        </a>
        <a href={`mailto:${email}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(241,237,228,0.45)', textDecoration: 'none' }}>
          {email}
        </a>
      </div>

      <div className="flex gap-4 mt-8">
        {social.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center transition-colors duration-300 hover:border-[#82866f]"
            style={{ width: '36px', height: '36px', border: '1px solid rgba(130,134,111,0.2)', color: 'rgba(241,237,228,0.4)' }}
          >
            <Icon size={14} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};
