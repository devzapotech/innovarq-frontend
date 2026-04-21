import { VALUES } from '@/app/constants';
import { ValueCard } from './ValueCard';

export const ValueCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(130,134,111,0.2)' }}>
      {VALUES.map((v, i) => (
        <ValueCard key={v.title} value={v} index={i} />
      ))}
    </div>
  );
}
