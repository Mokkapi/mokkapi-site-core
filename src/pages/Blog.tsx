
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getAllPosts, BlogPost } from '@/lib/blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <> 
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-charcoal-500 mb-8 text-center">Blog</h1>
        <p className="text-xl text-charcoal-400 text-center mb-16">
          {loading ? 'Loading blog posts...' : 'Insights, tutorials, and updates from our team'}
        </p>
        
        {loading ? (
          <div className="flex justify-center">
            <p>Loading blog posts...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.slug}>
                  <BlogCard post={post} />
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p>No blog posts found.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default Blog;
