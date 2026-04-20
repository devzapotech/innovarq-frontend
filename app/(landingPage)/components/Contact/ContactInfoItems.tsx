import { CONTACT_ITEMS } from '@/app/constants';

export const ContactInfoItems = () => {
  return (
    <div className="flex flex-col gap-8">
      {CONTACT_ITEMS.map((item) => {
        const Icon = item.icon;
        const lines = Array.isArray(item.content) ? item.content : [item.content];
        return (
          <div key={item.label} className="flex items-start gap-5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{ width: '40px', height: '40px', border: '1px solid rgba(17,17,16,0.25)' }}
            >
              <Icon size={16} color="#111110" />
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#111110', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '5px' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(17,17,16,0.7)', lineHeight: 1.7 }}>
                {lines.map((line, idx) => (
                  <span key={idx}>{line}{idx < lines.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
