import type { TestimonialsDotsProps } from '@/app/props';

export function TestimonialsDots({ total, current, onDotClick }: TestimonialsDotsProps) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3 mt-10 md:mt-12">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="cursor-pointer transition-all duration-300"
          style={{
            width: i === current ? '32px' : '6px',
            height: '2px',
            backgroundColor: i === current ? '#111110' : 'rgba(17,17,16,0.25)',
            border: 'none',
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}
