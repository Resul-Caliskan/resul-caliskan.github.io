export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPostMeta {
  title: string;
  date: string;
  author: string;
  description: string;
  slug: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  toc: TocItem[];
}
