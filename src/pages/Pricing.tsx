
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  
  return (
    <>
      
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-charcoal-500 mb-8 text-center">Pricing</h1>
        <p className="text-xl text-charcoal-400 text-center mb-16">
          Our pricing philosphy is quite simple. 
        </p>  
        <p className="text-xl text-charcoal-400 text-center mb-16">
          You are free to use the code for whatever non-commercial purpose you'd like. If you are using it for develoment activities you make money off of, you need a license. If you intend to bundle it or want to incorporate it within your offering on a continuing basis, please reach out for details. 
        </p>  
        <p className="text-xl text-charcoal-400 text-center mb-16">
          A license is purchased through Stripe. This gives you a clientID you can load into your instance and you can use when contacting support or requesting features. While the license renews every year, it is a perpetual update and support license. Which means if you don't renew you can continue using your current version for as long as you like.
        </p>
      </main>
    </>
  );
};

export default Pricing;
