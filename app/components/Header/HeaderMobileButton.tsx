import { HeaderMobileButtonProps } from '@/app/props';
import { Menu, X } from 'lucide-react';


export const HeaderMobileButton = ({ menuOpen, scrolled, onToggle }: HeaderMobileButtonProps) => (
  <button
    className="md:hidden p-2 cursor-pointer"
    onClick={onToggle}
    style={{ background: 'none', border: 'none', color: scrolled ? '#111110' : '#ffffff' }}
  >
    {menuOpen ? <X size={22} /> : <Menu size={22} />}
  </button>
);
