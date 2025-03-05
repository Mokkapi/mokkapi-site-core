
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "This software has completely transformed how our team works. The interface is intuitive, and the performance is outstanding.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechForward"
    },
    {
      quote: "We've tried many solutions, but nothing compares to the efficiency and reliability we've experienced since switching to this platform.",
      author: "Michael Chen",
      role: "Director of Operations",
      company: "InnovateNow"
    },
    {
      quote: "The attention to detail and thoughtful design makes this product stand out. It's clearly built by people who understand real business needs.",
      author: "Elena Rodriguez",
      role: "Product Manager",
      company: "FutureWorks"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-charcoal-500 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-softBlue-300 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-softBlue-400 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <Quote className="h-16 w-16 text-softBlue-300 mb-8 opacity-70" />
          
          <div className="relative w-full h-56 mb-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 flex flex-col items-center text-center",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <p className="text-xl md:text-2xl font-light mb-8 italic">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-softBlue-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-softBlue-400 w-5" : "bg-white/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
