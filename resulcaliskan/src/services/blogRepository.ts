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

// SRP: Calculate Reading Time according to language
export const calculateReadingTime = (content: string, lang: string = 'tr'): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return lang.startsWith('en') ? `${minutes} min read` : `${minutes} dk okuma`;
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

// Require contexts for Turkish and English markdown files
const trContext = (require as any).context('!!raw-loader!../data/blogs/tr', false, /\.md$/);
const enContext = (require as any).context('!!raw-loader!../data/blogs/en', false, /\.md$/);

class BlogRepository {
  private cache: Record<string, BlogPost[]> = {};

  private loadPostsForLang(lang: string): BlogPost[] {
    const normalizedLang = lang.startsWith('en') ? 'en' : 'tr';
    if (this.cache[normalizedLang]) {
      return this.cache[normalizedLang];
    }

    const context = normalizedLang === 'en' ? enContext : trContext;
    const fallbackContext = trContext;

    const keys: string[] = context.keys();

    const posts: BlogPost[] = keys.map((key) => {
      let rawContent: string;
      try {
        const mod = context(key);
        rawContent = typeof mod === 'string' ? mod : (mod.default || String(mod));
      } catch (e) {
        const mod = fallbackContext(key);
        rawContent = typeof mod === 'string' ? mod : (mod.default || String(mod));
      }

      const { data, content } = matter(rawContent);
      const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');
      const readingTime = calculateReadingTime(content, normalizedLang);
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
    this.cache[normalizedLang] = posts;
    return posts;
  }

  public getAllPosts(lang: string = 'tr'): BlogPostMeta[] {
    return this.loadPostsForLang(lang).map(({ content, toc, ...meta }) => meta);
  }

  public getPostBySlug(slug: string, lang: string = 'tr'): BlogPost | undefined {
    return this.loadPostsForLang(lang).find((post) => post.slug === slug);
  }
}

export const blogRepository = new BlogRepository();
