import matter from 'gray-matter';
import { posts as postIndex } from './index';

function estimateReadMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function loadPosts() {
  const allPosts = await Promise.all(
    postIndex.map(async (postInfo) => {
      const response = await fetch(postInfo.path);
      const text = await response.text();
      const { data, content } = matter(text);
      return {
        title: data.title || postInfo.slug,
        date: data.date || '',
        author: data.author || '',
        description: data.description || '',
        slug: postInfo.slug,
        readMinutes: estimateReadMinutes(content),
      };
    })
  );

  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
