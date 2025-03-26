
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, ChartGantt } from 'lucide-react';

type SupportOptionProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  link?: string; // optional prop for link URL
};

const SupportOption = ({
  icon: Icon,
  title,
  description,
  buttonText,
  link,
}: SupportOptionProps) => {
  // Determine if the link should open in a new tab (for external links)
  const isExternal = link ? link.startsWith('http') : false;

  const buttonContent = (
    <Button className="w-full bg-softBlue-500 hover:bg-softBlue-600">
      {buttonText}
    </Button>
  );

  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="mb-4 p-3 bg-softBlue-100 rounded-lg inline-block">
        <Icon className="h-6 w-6 text-softBlue-500" />
      </div>
      <h3 className="text-xl font-semibold text-charcoal-500 mb-2">{title}</h3>
      <p className="text-charcoal-400 mb-6 flex-grow">{description}</p>
      {link ? (
        <a
          href={link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {buttonContent}
        </a>
      ) : (
        buttonContent
      )}
    </div>
  );
};


const Support = () => {
  return (
    <>
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-charcoal-500 mb-4 text-center">Support Center</h1>
        <p className="text-xl text-charcoal-400 text-center mb-16 max-w-2xl mx-auto">
          Have questions or need help? We're here for you. Choose the support option that works best for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <SupportOption 
            icon={MessageSquare} 
            title="Helpdesk" 
            description="Submit a ticket through our helpdesk system." 
            buttonText="Submit Ticket" 
            link="https://mokkapi.atlassian.net/servicedesk/customer/portal/1"
          />
          <SupportOption 
            icon={Mail} 
            title="Email Support" 
            description="Send us a detailed message about your issue." 
            buttonText="Send Email" 
            link="mailto:support@mokkapi.atlassian.net"
          />
          <SupportOption 
            icon={ChartGantt} 
            title="Roadmap and Feedback" 
            description="See the roadmap and submit feedback" 
            buttonText="Go to Featurebase" 
            link="https://mokkapi.featurebase.app/"
          />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-charcoal-500 mb-6" id="FAQ">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Will there be a SaaS version available?",
                answer: "Yes, we are very likely going to be launching a SaaS version. We suspect the use cases may be different, so if you would like to explore this option please get in touch."
              },
              {
                question: "Can we submit feature requests?",
                answer: "Yes, you can submit them via the Github issues, but preferably you use our feedback page or email us directly."
              },
              {
                question: "What if I don't renew my subscription?",
                answer: "Nothing. While your continued support mostly goes to ensure we can keep putting out updates and security fixes, there are no self-destruct mechanisms or read-only modes in the software."
              },
              {
                question: "Do you offer any onboarding material or user guides",
                answer: "Our blog should cover a number of the common use cases and getting started help. If you feel something is missing, submit a support ticket and we'll look into updating it."
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
    </>
  );
};

export default Support;
