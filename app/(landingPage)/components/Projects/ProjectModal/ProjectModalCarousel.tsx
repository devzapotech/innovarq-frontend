"use client";

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import type { ProjectModalCarouselProps } from '@/app/props';
import { ProjectModalCarouselImage } from './ProjectModalCarouselImage';
import { ProjectModalCarouselControls } from './ProjectModalCarouselControls';
import { ProjectModalCarouselDots } from './ProjectModalCarouselDots';

export const ProjectModalCarousel = ({ photos, projectName, showBeforeAfter = true }: ProjectModalCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (newIndex: number, dir: number) => {
    setDirection(dir);
    setCurrent(newIndex);
  };

  const prev = () => navigate((current - 1 + photos.length) % photos.length, -1);
  const next = () => navigate((current + 1) % photos.length, 1);

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <AnimatePresence initial={false} custom={direction}>
          <ProjectModalCarouselImage
            key={photos[current]}
            src={photos[current]}
            alt={`${projectName} — foto ${current + 1}`}
            direction={direction}
            label={showBeforeAfter ? (current < Math.ceil(photos.length / 2) ? 'Antes' : 'Después') : undefined}
          />
        </AnimatePresence>
        {photos.length > 1 && (
          <ProjectModalCarouselControls onPrev={prev} onNext={next} />
        )}
        <div
          className="absolute bottom-3 right-4"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'rgba(241,237,228,0.6)', letterSpacing: '0.15em' }}
        >
          {current + 1} / {photos.length}
        </div>
      </div>
      {photos.length > 1 && (
        <div style={{ backgroundColor: '#111110', paddingBottom: '12px' }}>
          <ProjectModalCarouselDots
            total={photos.length}
            current={current}
            onDotClick={(i) => navigate(i, i > current ? 1 : -1)}
          />
        </div>
      )}
    </div>
  );
};
