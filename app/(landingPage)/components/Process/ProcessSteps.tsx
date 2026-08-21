import { STEPS } from '@/app/constants';
import { ProcessStepCard } from './ProcessStepCard';
import { ProcessStepsMobile } from './ProcessStepsMobile';

export const ProcessSteps = () => {
  return (
    <div className="relative">
      {/* Connecting line (desktop) */}
      <div
        className="absolute top-8 left-0 right-0 hidden md:block"
        style={{ height: '1px', backgroundColor: 'rgba(17,17,16,0.15)' }}
      />
      <div className="hidden md:grid md:grid-cols-4 gap-12 md:gap-8">
        {STEPS.map((step, i) => (
          <ProcessStepCard key={step.num} step={step} index={i} />
        ))}
      </div>
      <ProcessStepsMobile />
    </div>
  );
}
