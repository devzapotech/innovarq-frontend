"use client";

import { ProcessHeader } from './ProcessHeader';
import { ProcessSteps } from './ProcessSteps';
import { ProcessCTA } from './ProcessCTA';

export const ProcessSection = () => {
  return (
    <section style={{ backgroundColor: '#82866f' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <ProcessHeader />
        <ProcessSteps />
        <ProcessCTA />
      </div>
    </section>
  );
}
