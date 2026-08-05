// src/types/index.ts

export interface AvatarProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HeaderProps {
  title: string;
}

export interface BioLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface BioParagraph {
  id: number | string;
  text: string;
  links?: BioLink[];
}

export interface BioProps {
  bioData: BioParagraph[];
}

export interface SocialItem {
  id: 'twitter' | 'github' | 'linkedin' | 'email' | string;
  name: string;
  url: string;
}

export interface SocialsProps {
  socials: SocialItem[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface NavbarProps {
  navItems: NavItem[];
}

export interface ProfileData {
  avatar: AvatarProps;
  headline: string;
  bio: BioParagraph[];
  socials: SocialItem[];
  navItems: NavItem[];
}
