
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { User, MessageSquare, BookOpen, Menu, X, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavItem = ({ children, href, icon: Icon }: { children: React.ReactNode; href: string; icon: React.ElementType }) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-1.5 text-charcoal-400 hover:text-charcoal-500 transition-all duration-300 relative group"
    >
      <Icon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-softBlue-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "py-3 glass" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="z-10">
          <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem href="/" icon={Home}>Home</NavItem>
          <NavItem href="/blog" icon={BookOpen}>Blog</NavItem>
          <NavItem href="/support" icon={MessageSquare}>Support</NavItem>
          <NavItem href="/about" icon={BookOpen}>About</NavItem>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block z-10">
          <Button variant="ghost" className="gap-1.5" size="sm">
            <User size={18} />
            <span>Sign In</span>
          </Button>
          {/*<Button 
            className="ml-2 bg-softBlue-500 hover:bg-softBlue-600 text-white hover:shadow-lg transition-all duration-300"
            size="sm"
          >
            Get Started
          </Button>*/}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-charcoal-500 z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 glass-dark bg-opacity-90 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-6 text-white text-lg">
            <a 
              href="/" 
              className="flex items-center gap-2 hover:text-softBlue-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home size={20} />
              <span>Home</span>
            </a>
            <a 
              href="/blog" 
              className="flex items-center gap-2 hover:text-softBlue-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen size={20} />
              <span>Blog</span>
            </a>
            <a 
              href="/support" 
              className="flex items-center gap-2 hover:text-softBlue-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare size={20} />
              <span>Support</span>
            </a>
            <a 
              href="/about" 
              className="flex items-center gap-2 hover:text-softBlue-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen size={20} />
              <span>About</span>
            </a>
          </nav>
          
          <div className="flex flex-col gap-3 w-48">
            <Button 
              variant="outline" 
              className="w-full border-white/20 text-white hover:text-softBlue-300 hover:border-softBlue-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Button>
            {/*<Button 
              className="w-full bg-softBlue-500 hover:bg-softBlue-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
