"use client";

import { ValueLabel } from './ValueLabel';
import { ValueStatement } from './ValueStatement';
import { ValueCards } from './ValueCards';

export const ValueSection = () => {
  return (
    <section style={{ backgroundColor: '#f1ede4' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <ValueLabel />
        <ValueStatement />
        <ValueCards />
      </div>
    </section>
  );
}
