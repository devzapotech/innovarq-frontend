"use client";

import { TEAM } from '@/app/constants';
import { TeamHeader } from './TeamHeader';
import { TeamCard } from './TeamCard';

export function TeamSection() {
  return (
    <section style={{ backgroundColor: '#f1ede4' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-[35px] md:py-40">
        <TeamHeader />
        <div className="flex flex-col md:flex-row gap-12 mt-0 md:mt-16 justify-around">
          {TEAM.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
