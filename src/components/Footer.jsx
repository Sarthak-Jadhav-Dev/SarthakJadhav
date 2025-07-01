import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer data-scroll-section className="bg-gray-900 text-white pt-12">
      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="bg-gradient-to-tl from-gray-200 to-gray-500 text-gray-900 p-6 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="space-y-2 md:max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-gray-800">
              Let’s collaborate to build modern, high-impact digital solutions that set you apart.

Whether you’re a startup, small business, or an individual with a vision, I’m here to help you turn that vision into reality—one line of code at a time.

Your journey to powerful, future-ready products starts here.
            </p>
          </div>
          <Link to="/contact"><button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
            Book a Consultation 
            <ArrowRight className="w-5 h-5" />
          </button></Link>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-800 mt-8">
        <div>
          <h4 className="text-sm font-semibold mb-2">Projects</h4>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="https://www.kidstransedutech.com/">KTE</Link></li>
            <li><Link to="">CAMNDeshmukh</Link></li>
            <li><Link to="https://inspectra-ai-tool.onrender.com/">Inspectra</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Navigate</h4>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/works">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
