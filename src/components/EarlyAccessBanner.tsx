import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const EarlyAccessBanner = () => {

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full bg-softBlue-400 text-white text-center py-2 z-40"
    style={{ top: scrolled ? '60px' : '80px' }}>
      <p>
        Early Access Program: Purchase now to lock-in 50% off pricing forever! 
      </p>
    </div>
  );
};

export default EarlyAccessBanner;