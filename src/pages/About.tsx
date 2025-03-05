
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-charcoal-500 mb-6">About {'{M}'} space</h1>
            <p className="text-xl text-charcoal-400 mb-8">
              We're on a mission to transform how businesses operate with elegant, powerful software solutions.
            </p>
            <div className="w-24 h-1 bg-softBlue-400 mx-auto"></div>
          </div>
        </div>
        
        {/* Story Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-softBlue-100 min-h-[300px]"></div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-2xl font-semibold text-charcoal-500 mb-4">Our Story</h2>
                  <p className="text-charcoal-400 mb-4">
                    Founded in 2020, {'{M}'} space began with a simple idea: software should be as intuitive as it is powerful. 
                    Our founder, frustrated with the complexity of existing solutions, set out to create something different.
                  </p>
                  <p className="text-charcoal-400">
                    Today, we're a growing team of designers, engineers, and problem solvers dedicated to building tools 
                    that help businesses work smarter, not harder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-softBlue-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-charcoal-500 mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Simplicity",
                  description: "We believe in the power of simplicity. Our products strip away unnecessary complexity to focus on what truly matters."
                },
                {
                  title: "Quality",
                  description: "We're obsessed with quality in everything we create, from our code to our user interface to our customer support."
                },
                {
                  title: "Customer Focus",
                  description: "Our customers are at the heart of everything we do. We listen, learn, and build solutions that address real needs."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-softBlue-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-softBlue-500">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-500 mb-2">{value.title}</h3>
                  <p className="text-charcoal-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-semibold text-charcoal-500 mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
              <div key={member} className="text-center">
                <div className="h-40 w-40 mx-auto rounded-full bg-softBlue-100 mb-4"></div>
                <h3 className="text-lg font-semibold text-charcoal-500 mb-1">Team Member</h3>
                <p className="text-softBlue-500 mb-2">Position</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-charcoal-300 hover:text-charcoal-500 transition-colors">
                    <div className="h-5 w-5 bg-charcoal-300 rounded-sm"></div>
                  </a>
                  <a href="#" className="text-charcoal-300 hover:text-charcoal-500 transition-colors">
                    <div className="h-5 w-5 bg-charcoal-300 rounded-sm"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
