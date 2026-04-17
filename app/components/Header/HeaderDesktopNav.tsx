import { HeaderDesktopNavProps } from '@/app/props';


export const HeaderDesktopNav = ({ links, scrolled, onNav }: HeaderDesktopNavProps) => (
  <nav className="hidden md:flex items-center gap-8">
    {links.map((link) => (
      <button
        key={link.href}
        onClick={() => onNav(link.href)}
        className="relative group cursor-pointer"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 400,
          color: scrolled ? '#111110' : 'rgba(255,255,255,0.85)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          transition: 'color 0.3s',
          background: 'none',
          border: 'none',
          padding: '4px 0',
        }}
      >
        {link.label}
        <span
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
          style={{ backgroundColor: '#82866f' }}
        />
      </button>
    ))}
    <button
      onClick={() => onNav('#contacto')}
      className="ml-4 px-5 py-2 transition-all duration-300"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.65rem',
        fontWeight: 400,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        border: `1px solid ${scrolled ? '#82866f' : 'rgba(255,255,255,0.5)'}`,
        color: scrolled ? '#82866f' : '#ffffff',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
    >
      Proyecto
    </button>
  </nav>
);
