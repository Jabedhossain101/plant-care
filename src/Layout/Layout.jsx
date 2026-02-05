import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcf9] font-sans selection:bg-emerald-100">
      {/* Sticky Header Wrapper 
        'h-[80px]' ba 'h-[90px]' use korle Outlet-er content auto niche thakbe, 
        Header-er vitore dhuke jabe na.
      */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Header />
      </div>

      {/* Main Content (Outlet)
        'pt-[100px]' (Padding Top) add korar karone Banner ba onno content 
        Navbar-er niche (vitore) dhukbe na, borong thik niche theke shuru hobe.
      */}
      <main className="flex-grow pt-[100px] lg:pt-[120px]">
        <div className="animate-in fade-in duration-700">
          <Outlet />
        </div>
      </main>

      {/* Footer Section */}
      <div className="mt-auto">
        <Footer />
      </div>

      {/* Decorative background grain (Optional for high-end UI) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
    </div>
  );
};

export default Layout;
