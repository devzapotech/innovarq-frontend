import { STEPS } from '@/app/constants';

export const ProcessStepsMobile = () => (
  <div className="md:hidden -mx-6">
    <div
      className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-6"
      style={{ scrollPaddingLeft: '1.5rem' }}
    >
      {STEPS.map((step) => (
        <div
          key={step.num}
          className="snap-start shrink-0 w-[78%] p-8"
          style={{ backgroundColor: '#f1ede4' }}
        >
          <p
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              color: 'rgba(17,17,16,0.4)',
              letterSpacing: '0.1em',
            }}
          >
            {step.num}
          </p>
          <h3
            className="mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: '1.8rem',
              color: '#111110',
              lineHeight: 1.1,
            }}
          >
            {step.title}
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'rgba(17,17,16,0.6)',
              lineHeight: 1.9,
            }}
          >
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);
