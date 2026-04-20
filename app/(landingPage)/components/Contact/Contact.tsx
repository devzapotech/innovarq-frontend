"use client";

import { ContactBackground } from './ContactBackground';
import { ContactHeader } from './ContactHeader';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactSection = () => {
  return (
    <section id="contacto" style={{ backgroundColor: '#82866f', position: 'relative', overflow: 'hidden' }}>
      <ContactBackground />
        <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};
