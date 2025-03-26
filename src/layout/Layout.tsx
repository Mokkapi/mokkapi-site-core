import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import EarlyAccessBanner from '@/components/EarlyAccessBanner';
import Footer from '@/components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <EarlyAccessBanner />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
