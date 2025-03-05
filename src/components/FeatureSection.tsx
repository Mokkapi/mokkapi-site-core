
import React from 'react';
import { ArrowRight, Shield, Zap, BarChart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <div 
      className="relative rounded-xl overflow-hidden group"
      style={{ opacity: 0, animation: `slideUp 0.7s ease-in-out ${0.2 + index * 0.1}s forwards` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-softBlue-50 to-white rounded-xl transform group-hover:scale-[0.98] transition-all duration-300"></div>
      <div className="relative p-6 h-full flex flex-col">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm mb-4 group-hover:shadow-md transition-all duration-300">
          <Icon className="h-6 w-6 text-softBlue-500" />
        </div>
        
        <h3 className="text-xl font-semibold text-charcoal-500 mb-2">{title}</h3>
        
        <p className="text-charcoal-400 mb-4 flex-grow">{description}</p>
        
        <a href="#" className="inline-flex items-center text-softBlue-500 hover:text-softBlue-700 transition-colors">
          <span>Learn more</span>
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security keeps your data safe with advanced encryption and compliance practices."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized for speed with best-in-class responsiveness, even under heavy workloads."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Turn raw data into actionable insights with powerful visualization tools."
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Thoughtfully designed with obsessive attention to detail for a premium user experience."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-softBlue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-500 mb-4">
            Designed for modern workflows
          </h2>
          <p className="text-lg text-charcoal-400">
            Our platform is built with the features your team needs to excel in today's fast-paced environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
