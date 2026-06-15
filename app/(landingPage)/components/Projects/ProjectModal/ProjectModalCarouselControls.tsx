import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectModalCarouselControlsProps } from '@/app/props';

export const ProjectModalCarouselControls = ({ onPrev, onNext }: ProjectModalCarouselControlsProps) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9"
      style={{ backgroundColor: 'rgba(17,17,16,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(241,237,228,0.2)' }}
      aria-label="Foto anterior"
    >
      <ChevronLeft size={18} color="#f1ede4" />
    </button>
    <button
      onClick={onNext}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9"
      style={{ backgroundColor: 'rgba(17,17,16,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(241,237,228,0.2)' }}
      aria-label="Foto siguiente"
    >
      <ChevronRight size={18} color="#f1ede4" />
    </button>
  </>
);
