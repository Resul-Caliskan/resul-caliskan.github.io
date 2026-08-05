import { Buffer } from 'buffer';
import matter from 'gray-matter';
import { BlogPost, BlogPostMeta, TocItem } from '../types/blogTypes';

if (typeof window !== 'undefined') {
  (window as any).Buffer = (window as any).Buffer || Buffer;
}

// Helper to convert heading text to URL slug ID
export const slugifyHeader = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// SRP: Calculate Reading Time
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} dk okuma`;
};

// SRP: Extract Table of Contents from Markdown content
export const extractToc = (content: string): TocItem[] => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 2 for ##, 3 for ###
    const text = match[2].trim();
    const id = slugifyHeader(text);
    toc.push({ id, text, level });
  }

  return toc;
};

// Dynamic require context for markdown files in src/data/blogs using raw-loader
const blogContext = (require as any).context('!!raw-loader!../data/blogs', false, /\.md$/);

class BlogRepository {
  private postsCache: BlogPost[] | null = null;

  private loadPosts(): BlogPost[] {
    if (this.postsCache) {
      return this.postsCache;
    }

    const keys: string[] = blogContext.keys();

    const posts: BlogPost[] = keys.map((key) => {
      const rawContent: string = blogContext(key).default || blogContext(key);
      const { data, content } = matter(rawContent);

      // Extract slug from filename: './kavramsal-tasarim.md' => 'kavramsal-tasarim'
      const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');
      const readingTime = calculateReadingTime(content);
      const toc = extractToc(content);

      return {
        title: data.title || 'Untitled Post',
        date: data.date || '',
        author: data.author || 'Resul Çalışkan',
        description: data.description || '',
        slug,
        readingTime,
        content,
        toc,
      };
    });

    // Sort by date descending
    posts.sort((a, b) => (a.date > b.date ? -1 : 1));
    this.postsCache = posts;
    return posts;
  }

  public getAllPosts(): BlogPostMeta[] {
    return this.loadPosts().map(({ content, toc, ...meta }) => meta);
  }

  public getPostBySlug(slug: string): BlogPost | undefined {
    return this.loadPosts().find((post) => post.slug === slug);
  }
}

export const blogRepository = new BlogRepository();
