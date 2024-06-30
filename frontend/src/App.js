// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link className="text-white text-lg font-bold" to="/">Beyondriffs</Link>
            <div className="space-x-4">
              <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
              <Link className="text-gray-300 hover:text-white" to="/about">About</Link>
              <Link className="text-gray-300 hover:text-white" to="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
