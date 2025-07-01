import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Works';
import "./App.css"



export default function HeroSection() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/works" element={<Projects/>} />
        </Routes>
      </Router>
    </>
  );
}
