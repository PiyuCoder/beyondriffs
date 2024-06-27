// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
    <Router>
     
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
