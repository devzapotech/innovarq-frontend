import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TestimonialsDotsProps } from '@/app/props';

export function TestimonialsDots({ total, current, onDotClick, onPrev, onNext }: TestimonialsDotsProps) {
  return (
    <div className="flex items-center gap-3 mt-12">
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
      {/* Mobile nav */}
      <div className="flex md:hidden gap-3 ml-auto">
        <button onClick={onPrev} className="cursor-pointer" style={{ background: 'none', border: '1px solid rgba(17,17,16,0.3)', color: '#111110', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={16} />
        </button>
        <button onClick={onNext} className="cursor-pointer" style={{ background: 'none', border: '1px solid rgba(17,17,16,0.3)', color: '#111110', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
