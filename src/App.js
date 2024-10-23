// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home'; // Assume these are in the pages folder
import About from '../src/components/About'; // Assume these are in the';
import Services from '../src/components/Services'; // Assume these are in the
import Contact from '../src/components/Contact'; // Assume these
import Layout from '../src/components/Layout'; // Import Layout

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All routes are nested inside the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route to Home */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
