import type { MotionValue } from 'motion/react';
import { NavLink, Project, Service, SocialLink, Testimonial } from "../types";

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

// Hero
export interface HeroBackgroundProps {
  imgY: MotionValue<string>;
}

export interface HeroContentProps {
  textY: MotionValue<string>;
  opacity: MotionValue<number>;
  onNav: (href: string) => void;
}

export interface HeroCTAsProps {
  onNav: (href: string) => void;
}

export interface HeroScrollIndicatorProps {
  onNav: (href: string) => void;
}

// Projects
export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ProjectsFilterProps {
  filters: string[];
  activeFilter: string;
  onFilter: (filter: string) => void;
}

export interface ProjectsGridProps {
  projects: Project[];
  activeFilter: string;
}

// Services
export interface ServiceCardProps {
  service: Service;
  index: number;
}

// Testimonials
export interface TestimonialsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export interface TestimonialSlideProps {
  testimonial: Testimonial;
  direction: number;
  current: number;
  total: number;
}

export interface TestimonialsDotsProps {
  total: number;
  current: number;
  onDotClick: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
}
