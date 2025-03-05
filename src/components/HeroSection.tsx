
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate percentage of mouse position
      const xPercentage = clientX / innerWidth - 0.5;
      const yPercentage = clientY / innerHeight - 0.5;
      
      // Apply subtle movement to background elements
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.speed || '5');
        const xMove = xPercentage * speed;
        const yMove = yPercentage * speed;
        htmlEl.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="parallax-element absolute top-20 left-1/4 w-64 h-64 rounded-full bg-softBlue-100 opacity-60 blur-3xl"
          data-speed="10"
        ></div>
        <div 
          className="parallax-element absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-softBlue-200 opacity-60 blur-3xl"
          data-speed="15"
        ></div>
        <div 
          className="parallax-element absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-softBlue-300 opacity-40 blur-3xl"
          data-speed="8"
        ></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-500 mb-6 leading-tight">
            <span className="block opacity-0 animate-slideUp">Modern Solutions for</span>
            <span className="block opacity-0 animate-slideUp animation-delay-100">Modern Problems</span>
          </h1>
          
          <p className="text-lg md:text-xl text-charcoal-400 mb-8 max-w-2xl mx-auto opacity-0 animate-slideUp animation-delay-200">
            Powerful, intuitive software built for businesses that want to move faster, 
            scale smarter, and lead the future of innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slideUp animation-delay-300">
            <Button className="bg-softBlue-500 hover:bg-softBlue-600 text-white px-6 py-6 text-lg rounded-lg hover:translate-y-[-2px] transition-all duration-300">
              Get Started
            </Button>
            
            <Button variant="outline" className="group px-6 py-6 text-lg rounded-lg border-charcoal-300">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="mt-16 opacity-0 animate-fadeIn animation-delay-500">
            <p className="text-sm text-charcoal-400 mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Placeholders for company logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-24 bg-charcoal-100/50 rounded-md"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
