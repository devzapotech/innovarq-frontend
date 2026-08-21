import { VALUES } from '@/app/constants';
import { ValueCard } from './ValueCard';
import { ValueMobileSummary } from './ValueMobileSummary';

export const ValueCards = () => {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(130,134,111,0.2)' }}>
        {VALUES.map((v, i) => (
          <ValueCard key={v.title} value={v} index={i} />
        ))}
      </div>
      <ValueMobileSummary />
    </>
  );
}
