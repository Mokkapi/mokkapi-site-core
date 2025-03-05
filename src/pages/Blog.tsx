
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-charcoal-500 mb-8 text-center">Blog</h1>
        <p className="text-xl text-charcoal-400 text-center mb-16">
          Coming soon - Check back for updates and insights
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-softBlue-100"></div>
              <div className="p-6">
                <p className="text-softBlue-500 text-sm mb-2">Category • Date</p>
                <h3 className="text-xl font-semibold text-charcoal-500 mb-2">
                  Blog Post Title Placeholder
                </h3>
                <p className="text-charcoal-400 mb-4">
                  This is a placeholder for future blog content. Stay tuned for articles, tutorials, and industry insights.
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-softBlue-200 mr-3"></div>
                  <span className="text-charcoal-400">Author Name</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
