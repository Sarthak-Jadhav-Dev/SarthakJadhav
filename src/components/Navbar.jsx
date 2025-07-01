import React, { useState } from "react";
import { Accessibility, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-6 z-50 flex justify-center">
      <nav className="flex items-center justify-between px-6 py-3 bg-[#1f1f1f] rounded-full shadow-lg max-w-6xl w-full">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-cyan-300 tracking-wider">
          Sarthak<span className="text-white">|</span><span className="text-orange-400">Jadhav</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-bold text-sm uppercase tracking-wide">
          <Link to="/"><li className="hover:text-cyan-400 cursor-pointer">Home</li></Link>
          <Link to="/services"><li className="hover:text-cyan-400 cursor-pointer">Services/Skills</li></Link>
          <Link to="/about"><li className="hover:text-cyan-400 cursor-pointer">About</li></Link>
          <Link to="/works"><li className="hover:text-cyan-400 cursor-pointer">Projects</li></Link>
          
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/Contact"><button className="bg-cyan-300 text-black px-5 py-2 rounded-full font-bold text-sm">
            LET'S TALK
          </button></Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 w-full max-w-6xl bg-[#1f1f1f] text-white rounded-xl px-6 py-4 shadow-md md:hidden">
          <ul className="space-y-4 text-center text-sm font-bold uppercase tracking-wide">
            <li className="hover:text-cyan-400 cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-cyan-400 cursor-pointer"><Link to="/services">Servcies/SKills</Link></li>
            <li className="hover:text-cyan-400 cursor-pointer"><Link to="/about">About</Link></li>
            <li className="hover:text-cyan-400 cursor-pointer"><Link to="/works">Projects</Link></li>
          </ul>
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/contact"><button className="bg-orange-400 text-black px-5 py-2 rounded-full font-bold text-sm">
              LET'S TALK
            </button></Link>
          </div>
        </div>
      )}
    </header>
  );
}
