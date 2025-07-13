// src/posts/index.js
import post1 from './ilk-yazim.md';

// Yeni yazılar ekledikçe buraya import edin:
// import post2 from './ikinci-yazi.md';

// İçe aktarılan değişken (örneğin, post1) dosyanın genel URL yoludur.
export const posts = [
  { slug: 'ilk-yazim', path: post1 },
  // { slug: 'ikinci-yazi', path: post2 },
];
