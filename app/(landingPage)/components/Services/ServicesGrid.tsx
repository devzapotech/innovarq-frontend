import { SERVICES } from '@/app/constants';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
    {SERVICES.map((service, i) => (
      <ServiceCard key={service.num} service={service} index={i} />
    ))}
  </div>
);
