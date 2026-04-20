import { CONTACT_HOURS } from '@/app/constants';

export const ContactOfficeHours = () => {
  return (
    <div style={{ borderTop: '1px solid rgba(17,17,16,0.15)', paddingTop: '1.5rem' }}>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#111110', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
        Horario de atención
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'rgba(17,17,16,0.6)', lineHeight: 1.8 }}>
        {CONTACT_HOURS.map((line, idx) => (
          <span key={idx}>{line}{idx < CONTACT_HOURS.length - 1 && <br />}</span>
        ))}
      </p>
    </div>
  );
}
