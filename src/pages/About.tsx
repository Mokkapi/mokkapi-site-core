
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
            <h1 className="text-4xl font-bold text-charcoal-500 mb-6">About Mokkapi</h1>
            <p className="text-xl text-charcoal-400 mb-8">
              We want to build simple tools that deliver value. 
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
                  <h2 className="text-2xl font-semibold text-charcoal-500 mb-4">Our Tool</h2>
                  <p className="text-charcoal-400 mb-4">
                    We stripped out the business logic of a backend application. The tool literally serves the stored JSON without processing. This makes it easier to develop against an agreed upon, or not yet existing API. Tweak the API, add variations, add extra fields, etc. Similarly, create a local copy of common third party API endpoints you want to include in your test suite. See our use cases for more.
                  </p>
                  <p className="text-charcoal-400">
                    While we intend to grow the functionality of the tool, we want to keep certain things constant: the price you pay will never increase, and as a paying user you should own and be able to use a copy you purchased forever.
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
                  description: "We believe in the power of simplicity. Our product strips away unnecessary complexity to focus on what truly matters."
                },
                {
                  title: "Quality",
                  description: "We're obsessed with quality in everything we create, from our code to our marketing material, to our customer support. How you do anything is how you do everything!"
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-40 w-40 mx-auto rounded-full mb-4 overflow-hidden">
              <img src="/public/profile-phil.jpg" alt="Profile of Phil Heijkoop" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-500 mb-1">Phil Heijkoop</h3>
              <p className="text-softBlue-500 mb-2">Founder</p>
              <div className="flex justify-center gap-3">
                <a href="https://madebyphil.com" className="text-charcoal-300 hover:text-charcoal-500 transition-colors">
                  <div className="h-5 w-5 bg-charcoal-300 rounded-sm"></div>
                </a>
                <a href="https://www.linkedin.com/in/philipheijkoop" className="text-charcoal-300 hover:text-charcoal-500 transition-colors">
                  <div className="h-5 w-5 bg-charcoal-300 rounded-sm"></div>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="h-40 w-40 mx-auto rounded-full mb-4 overflow-hidden">
                <img src="/public/phoebe.jpg" alt="Profile of handsome dog" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-500 mb-1">Phoebe</h3>
              <p className="text-softBlue-500 mb-2">Chief Morale Officer</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-charcoal-300 hover:text-charcoal-500 transition-colors">
                  <div className="h-5 w-5 bg-charcoal-300 rounded-sm"></div>
                </a>
                <a href="#" className="text-charcoal-300 hover:text-charcoal-500 transition-colors">
                  <div className="h-5 w-5 bg-charcoal-300 rounded-sm"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
