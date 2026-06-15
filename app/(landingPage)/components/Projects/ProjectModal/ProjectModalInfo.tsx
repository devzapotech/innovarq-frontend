import type { ProjectModalInfoProps } from '@/app/props';

export const ProjectModalInfo = ({ name, description, location, year, category }: ProjectModalInfoProps) => (
  <div className="flex flex-col justify-center gap-6 py-4 md:py-0">
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div style={{ width: '30px', height: '1px', backgroundColor: '#82866f' }} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#82866f', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
          {category}
        </span>
      </div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f1ede4', lineHeight: 1.05 }}>
        {name}
      </h2>
    </div>
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(241,237,228,0.7)', lineHeight: 1.8 }}>
      {description}
    </p>
    <div className="pt-4" style={{ borderTop: '1px solid rgba(241,237,228,0.1)' }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: 'rgba(241,237,228,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {location} · {year}
      </span>
    </div>
  </div>
);
