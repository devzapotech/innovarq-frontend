import type { ProjectModalCarouselDotsProps } from '@/app/props';

export const ProjectModalCarouselDots = ({ total, current, onDotClick }: ProjectModalCarouselDotsProps) => (
  <div className="flex justify-center gap-2 pt-3">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        aria-label={`Ir a foto ${i + 1}`}
        style={{
          width: i === current ? '24px' : '8px',
          height: '8px',
          borderRadius: '4px',
          backgroundColor: i === current ? '#82866f' : 'rgba(130,134,111,0.35)',
          transition: 'all 0.35s ease',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      />
    ))}
  </div>
);
