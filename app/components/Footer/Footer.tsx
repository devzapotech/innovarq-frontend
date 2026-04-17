"use client";

import { FooterBrand } from './FooterBrand';
import { FooterNav } from './FooterNav';
import { FooterContact } from './FooterContact';
import { FooterBottom } from './FooterBottom';
import { LINKS, SOCIAL } from '@/app/constants';



export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#0a0a09', borderTop: '1px solid rgba(130,134,111,0.1)' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <FooterBrand onScrollTop={scrollTop} />
          <FooterNav links={LINKS} onNav={handleNav} />
          <FooterContact
            addressLines={['Av. Masaryk 111, Polanco', 'Ciudad de México, 11560']}
            phone="+52 (55) 4500-1234"
            email="hola@innovarq.mx"
            social={SOCIAL}
          />
        </div>
        <FooterBottom onScrollTop={scrollTop} />
      </div>
    </footer>
  );
};

export default Footer;
