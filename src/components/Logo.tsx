
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  minimal?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md', minimal = false }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };
  
  return (
    <div className={cn("font-bold flex items-center gap-2", sizeClasses[size], className)}>
      <span className="text-softBlue-500">&#123;M&#125;</span>
      {!minimal && (
        <span className="text-charcoal-500 font-medium ml-1 opacity-0 translate-x-[-10px] animate-slideRight animation-delay-100">
          Mokkapi
        </span>
      )}
    </div>
  );
};

export default Logo;
