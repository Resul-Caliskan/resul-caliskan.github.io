export type ProjectCategory = 'all' | 'live' | 'games' | 'ai_web' | 'open_source';

export interface ProjectLinks {
  googlePlay?: string;
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  description: {
    tr: string;
    en: string;
  };
  longDescription?: {
    tr: string;
    en: string;
  };
  features?: {
    tr: string[];
    en: string[];
  };
  icon?: string;
  coverImage?: string;
  tags: string[];
  links: ProjectLinks;
  isLive?: boolean;
  featured?: boolean;
}
