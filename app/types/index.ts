export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
}

export interface Project {
  id: number;
  name: string;
  location: string;
  category: string;
  year: string;
  img: string;
  size: 'large' | 'small';
}

export interface Service {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
  num: string;
}
