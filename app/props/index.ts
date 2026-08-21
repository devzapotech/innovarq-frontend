import type { MotionValue } from 'motion/react';
import { NavLink, Project, ProcessStep, Service, SocialLink, TeamMember, Testimonial, ValueItem } from "../types";

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
  onClick: () => void;
}

export interface ProjectsFilterProps {
  filters: string[];
  activeFilter: string;
  onFilter: (filter: string) => void;
}

export interface ProjectsGridProps {
  projects: Project[];
  activeFilter: string;
  onCardClick: (project: Project) => void;
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export interface ProjectModalInfoProps {
  name: string;
  description: string;
  location: string;
  year: string;
  category: string;
}

export interface ProjectModalCarouselProps {
  photos: string[];
  projectName: string;
  showBeforeAfter?: boolean;
}

export interface ProjectModalCarouselImageProps {
  src: string;
  alt: string;
  direction: number;
  label?: 'Antes' | 'Después';
}

export interface ProjectModalCarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export interface ProjectModalCarouselDotsProps {
  total: number;
  current: number;
  onDotClick: (i: number) => void;
}

export interface ProjectModalLightboxProps {
  photos: string[];
  projectName: string;
  current: number;
  direction: number;
  showBeforeAfter: boolean;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

// Services
export interface ServiceCardProps {
  service: Service;
  index: number;
}

// Team
export interface TeamCardProps {
  member: TeamMember;
  index: number;
}

// Testimonials
export interface TestimonialsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export interface TestimonialSlideProps {
  testimonials: Testimonial[];
  direction: number;
  current: number;
  total: number;
  onSwipe: (direction: 1 | -1) => void;
}

export interface TestimonialsDotsProps {
  total: number;
  current: number;
  onDotClick: (i: number) => void;
}

// Process
export interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
}

// Value
export interface ValueCardProps {
  value: ValueItem;
  index: number;
}
