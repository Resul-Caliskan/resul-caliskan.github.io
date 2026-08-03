import { Buffer } from 'buffer';
import matter from 'gray-matter';

// gray-matter needs Buffer in the browser (must run before matter())
window.Buffer = window.Buffer || Buffer;

const requirePost = require.context('!!raw-loader!./', false, /\.md$/);

function estimateReadMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function toText(mod) {
  if (typeof mod === 'string') return mod;
  if (mod && typeof mod.default === 'string') return mod.default;
  return '';
}

export const posts = requirePost
  .keys()
  .map((key) => {
    const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');
    const raw = toText(requirePost(key));
    const { content, data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      author: data.author || '',
      description: data.description || '',
      content,
      data,
      readMinutes: estimateReadMinutes(content),
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}
