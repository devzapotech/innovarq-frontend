"use client";

import { TEAM } from '@/app/constants';
import { TeamHeader } from './TeamHeader';
import { TeamCard } from './TeamCard';

export function TeamSection() {
  return (
    <section style={{ backgroundColor: '#f1ede4' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <TeamHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {TEAM.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
