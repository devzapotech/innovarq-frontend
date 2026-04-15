import { NavLink, SocialLink } from "../types";

export interface FooterNavProps {
  links: NavLink[];
  onNav: (href: string) => void;
}

export interface FooterBottomProps {
  onScrollTop: () => void;
}

export type FooterBrandProps = FooterBottomProps;

export interface FooterContactProps {
  addressLines: string[];
  phone: string;
  email: string;
  social: SocialLink[];
}

export interface HeaderDesktopNavProps {
  links: NavLink[];
  scrolled: boolean;
  onNav: (href: string) => void;
}

export interface HeaderLogoProps {
  scrolled: boolean;
  onNav: (href: string) => void;
}

export interface HeaderMobileButtonProps {
  menuOpen: boolean;
  scrolled: boolean;
  onToggle: () => void;
}

export interface HeaderMobileMenuProps {
  links: NavLink[];
  menuOpen: boolean;
  onNav: (href: string) => void;
}
