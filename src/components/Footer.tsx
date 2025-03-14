
import React from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface FooterColumnProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-semibold text-charcoal-500 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-charcoal-400 hover:text-charcoal-500 transition-colors relative inline-block group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-softBlue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "/pricing" },
        { label: "Libraries", href: "#" },
        { label: "FAQ", href: "/support#FAQ" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Support", href: "/support" },
        { label: "Use cases", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security", href: "#" },
        { label: "Compliance", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-charcoal-400 mb-6 max-w-sm">
              Simple, thoughtfully designed software solutions.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'github', 'facebook'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-softBlue-100 flex items-center justify-center text-softBlue-500 hover:bg-softBlue-200 transition-colors"
                  aria-label={`Visit our ${social}`}
                >
                  <div className="h-5 w-5 bg-softBlue-500 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          {columns.map((column, index) => (
            <FooterColumn 
              key={index} 
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-400 text-sm">
            &copy; {currentYear} Mokkapi. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-charcoal-400 hover:text-charcoal-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-charcoal-400 hover:text-charcoal-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-charcoal-400 hover:text-charcoal-500 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
