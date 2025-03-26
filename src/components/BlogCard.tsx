
import React from 'react';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <p className="text-softBlue-500 text-sm mb-2">{post.category} • {post.date}</p>
        <h3 className="text-xl font-semibold text-charcoal-500 mb-2">
          {post.title}
        </h3>
        <p className="text-charcoal-400 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-softBlue-200 mr-3" 
               style={{ backgroundImage: `url(${post.authorImage})`, backgroundSize: 'cover' }}></div>
          <span className="text-charcoal-400">{post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
