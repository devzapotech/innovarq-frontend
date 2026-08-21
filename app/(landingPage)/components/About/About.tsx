"use client";

import { AboutTextContent } from './AboutTextContent';
import { AboutImage } from './AboutImage';
import { AboutStats } from './AboutStats';

export const AboutSection = () => (
  <section id="nosotros" style={{ backgroundColor: '#82866f' }}>
    <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-[35px] md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <AboutTextContent />
        <AboutImage />
      </div>
      <AboutStats />
    </div>
  </section>
);
