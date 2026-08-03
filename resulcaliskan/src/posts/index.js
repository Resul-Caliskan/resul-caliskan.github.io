// src/posts/index.js
// Tüm .md dosyalarını otomatik olarak bulur — yeni yazı için sadece .md eklemen yeterli.

const requirePost = require.context('./', false, /\.md$/);

const resolvePath = (mod) => (typeof mod === 'string' ? mod : mod.default);

export const posts = requirePost.keys().map((key) => {
  const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');
  return {
    slug,
    path: resolvePath(requirePost(key)),
  };
});

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}
