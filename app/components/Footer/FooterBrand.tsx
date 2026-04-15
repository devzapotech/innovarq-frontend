import { FooterBrandProps } from "@/app/props";

export const FooterBrand = ({ onScrollTop }: FooterBrandProps) => (
  <div>
    <button
      onClick={onScrollTop}
      className="cursor-pointer text-left mb-5"
      style={{ background: 'none', border: 'none' }}
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, color: '#f1ede4', letterSpacing: '0.12em' }}>
        INNOVARQ
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', color: '#82866f', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '2px' }}>
        Estudio de Arquitectura
      </p>
    </button>
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(241,237,228,0.35)', lineHeight: 1.8, maxWidth: '280px' }}>
      Creamos espacios que transforman la forma de vivir. Arquitectura contemporánea, funcional y emocional.
    </p>
  </div>
);
