import { useState, useEffect } from 'react';
import { loadPosts } from '../posts/loadPosts';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    loadPosts()
      .then((allPosts) => {
        if (active) setPosts(allPosts);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { posts, loading };
}
