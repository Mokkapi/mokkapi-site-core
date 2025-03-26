
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, FlaskConical } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-softBlue-100 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-softBlue-200 rounded-full blur-3xl opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-softBlue-300 rounded-full blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-softBlue-50 opacity-70"></div>
          
          {/* Content */}
          <div className="relative cta z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-500 mb-4">
                Ready to build the simplest backend you'll ever need?
              </h2>
              <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
                Try out our demo instance or grab your own copy on Github.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-softBlue-500 hover:bg-softBlue-600 text-white text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href="https://demo.mokkapi.com">
                <FlaskConical className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Go to Demo Site
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="text-lg py-6 px-8 rounded-lg border-charcoal-200 hover:border-charcoal-300 group"
              >
                <a href="https://github.com/Mokkapi/mokkapi">
                <Github className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Go to Github page</span>
                </a>
              </Button>
            </div>
            
            <p className="text-center text-charcoal-400 text-sm mt-6">
              No fixed trial period. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
