"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderDesktopNav } from './HeaderDesktopNav';
import { HeaderMobileButton } from './HeaderMobileButton';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { LINKS } from '@/app/constants';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-100 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(241,237,228,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(130,134,111,0.15)' : '1px solid transparent',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-350 mx-auto px-6 md:px-12 flex items-center justify-between" style={{ height: '72px' }}>
          <HeaderLogo scrolled={scrolled} onNav={handleNav} />
          <HeaderDesktopNav links={LINKS} scrolled={scrolled} onNav={handleNav} />
          <HeaderMobileButton menuOpen={menuOpen} scrolled={scrolled} onToggle={() => setMenuOpen(!menuOpen)} />
        </div>
      </motion.header>
      <HeaderMobileMenu links={LINKS} menuOpen={menuOpen} onNav={handleNav} />
    </>
  );
}

export default Header;
