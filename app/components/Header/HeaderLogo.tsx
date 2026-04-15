import { HeaderLogoProps } from "@/app/props";


export const HeaderLogo = ({ scrolled, onNav }: HeaderLogoProps) => (
  <button
    onClick={() => onNav('#inicio')}
    className="flex flex-col items-start cursor-pointer"
    style={{ background: 'none', border: 'none' }}
  >
    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.5rem',
        fontWeight: 400,
        color: scrolled ? '#111110' : '#ffffff',
        letterSpacing: '0.15em',
        lineHeight: 1,
        transition: 'color 0.4s',
      }}
    >
      INNOVARQ
    </span>
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.55rem',
        fontWeight: 300,
        color: scrolled ? '#82866f' : 'rgba(255,255,255,0.7)',
        letterSpacing: '0.3em',
        transition: 'color 0.4s',
      }}
    >
      ESTUDIO DE ARQUITECTURA
    </span>
  </button>
);
