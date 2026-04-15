import { FooterNavProps } from '@/app/props';

export const FooterNav = ({ links, onNav }: FooterNavProps) => (
  <div>
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', color: '#82866f', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '20px' }}>
      Navegación
    </p>
    <nav className="flex flex-col gap-3">
      {links.map((link) => (
        <button
          key={link.href}
          onClick={() => onNav(link.href)}
          className="text-left group cursor-pointer w-fit"
          style={{ background: 'none', border: 'none' }}
        >
          <span
            className="transition-colors duration-300 group-hover:text-[#82866f]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(241,237,228,0.45)' }}
          >
            {link.label}
          </span>
        </button>
      ))}
    </nav>
  </div>
);
