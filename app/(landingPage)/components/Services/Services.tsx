"use client";

import { ServicesHeader } from './ServicesHeader';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  return (
    <section id="servicios" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-[35px] md:py-40">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}
