import matter from 'gray-matter';
import { posts as postIndex } from './index';

export async function loadPosts() {
  const allPosts = await Promise.all(
    postIndex.map(async (postInfo) => {
      const response = await fetch(postInfo.path);
      const text = await response.text();
      const { data } = matter(text);
      return {
        title: data.title || postInfo.slug,
        date: data.date || '',
        author: data.author || '',
        description: data.description || '',
        slug: postInfo.slug,
      };
    })
  );

  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
