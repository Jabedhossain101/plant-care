import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-0 z-50 bg-white shadow">
          {' '}
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
