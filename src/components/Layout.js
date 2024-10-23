// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Navbar will always be displayed */}
      <Navbar />

      {/* Outlet renders the current page's component based on the route */}
      <div className="container mt-4">
        <Outlet />
      </div>

      {/* Footer will always be displayed at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
