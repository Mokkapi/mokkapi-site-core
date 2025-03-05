
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, BlogPost } from '@/lib/blog';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const postData = await getPostBySlug(slug);
        setPost(postData);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto">
            <p className="text-center">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto">
            <p className="text-center">Post not found</p>
            <div className="text-center mt-8">
              <Link to="/blog" className="inline-flex items-center text-softBlue-500 hover:text-softBlue-600">
                <ArrowLeft size={16} className="mr-2" />
                Back to blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-softBlue-500 hover:text-softBlue-600 mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to blog
          </Link>
          
          <header className="mb-10">
            <p className="text-softBlue-500 text-sm mb-2">{post.category} • {post.date}</p>
            <h1 className="text-4xl font-bold text-charcoal-500 mb-4">{post.title}</h1>
            
            <div className="flex items-center mt-6">
              <div 
                className="h-12 w-12 rounded-full bg-softBlue-200 mr-3" 
                style={{ backgroundImage: `url(${post.authorImage})`, backgroundSize: 'cover' }}
              ></div>
              <span className="text-charcoal-400">{post.author}</span>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none prose-headings:text-charcoal-500 prose-a:text-softBlue-500" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
