export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
}
