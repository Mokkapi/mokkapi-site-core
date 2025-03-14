
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const SupportOption = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  buttonText: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="mb-4 p-3 bg-softBlue-100 rounded-lg inline-block">
        <Icon className="h-6 w-6 text-softBlue-500" />
      </div>
      <h3 className="text-xl font-semibold text-charcoal-500 mb-2">{title}</h3>
      <p className="text-charcoal-400 mb-6 flex-grow">{description}</p>
      <Button className="w-full bg-softBlue-500 hover:bg-softBlue-600">
        {buttonText}
      </Button>
    </div>
  );
};

const Support = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-charcoal-500 mb-4 text-center">Support Center</h1>
        <p className="text-xl text-charcoal-400 text-center mb-16 max-w-2xl mx-auto">
          Have questions or need help? We're here for you. Choose the support option that works best for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <SupportOption 
            icon={MessageSquare} 
            title="Live Chat" 
            description="Chat with our support team in real-time for immediate assistance with your questions." 
            buttonText="Start Chat" 
          />
          <SupportOption 
            icon={Mail} 
            title="Email Support" 
            description="Send us a detailed message about your issue and we'll get back to you within 24 hours." 
            buttonText="Send Email" 
          />
          <SupportOption 
            icon={Phone} 
            title="Phone Support" 
            description="Schedule a call with one of our expert support representatives for complex issues." 
            buttonText="Schedule Call" 
          />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-charcoal-500 mb-6" id="FAQ">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How do I reset my password?",
                answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email."
              },
              {
                question: "Is there a mobile app available?",
                answer: "Yes, we offer mobile apps for both iOS and Android platforms. You can download them from the App Store or Google Play."
              },
              {
                question: "How can I upgrade my subscription?",
                answer: "To upgrade your subscription, go to your Account Settings and select the 'Subscription' tab. From there, you can choose a new plan."
              },
              {
                question: "Do you offer training for new users?",
                answer: "Yes, we provide free onboarding sessions for all new users. You can also access our library of video tutorials and documentation."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-charcoal-500 mb-2">{faq.question}</h3>
                <p className="text-charcoal-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
