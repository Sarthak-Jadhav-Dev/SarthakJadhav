import React from 'react';
import Navbar from './Navbar.jsx';
import SmoothScroll from './SmoothScrolling.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import {Link} from "react-router-dom"

const Contact = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        {/* Hero Section */}
        <section
          data-scroll-section
          className="bg-black text-white min-h-screen px-6 md:px-16 py-20 pt-40 relative overflow-hidden"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              GET IN <span className="text-orange-400">TOUCH</span> <span className="text-3xl ml-2">🤝</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 text-lg mt-6"
            >
              I’m passionate about collaborating on projects that challenge conventions and create meaningful digital experiences. Let’s connect to explore your vision in detail, discuss your goals, and outline how I can help you achieve success—step by step.
            </motion.p>
          </div>
        </section>

        {/* Contact Grid */}
        <section
          data-scroll-section
          className="bg-[#f7f7f7] text-gray-800 py-20 px-6 md:px-16"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col space-y-4 border-1"
            >
              <h3 className="text-2xl font-bold">Contact Details</h3>
              <div className="flex items-center space-x-3">
                <Mail className="text-cyan-400" />
                <span>sarthakjadhav200206@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-400" />
                <span>+91 9922995573</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-cyan-400" />
                <span>sarthakjadhav4848@gmail.com</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col space-y-4 border-1"
            >
              <h3 className="text-2xl font-bold">Follow Us</h3>
              <div className="flex flex-col space-y-10 align-middle">
                <div className='w-full flex border-1 flex-col bg-gradient-to-bl from-gray-100 to-gray-300 p-4 rounded-2xl'><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:pointer">
                  <Instagram size={28} />
                  <Link to="https://www.instagram.com/sarthakshahajijadhav?igsh=MWo3YTZ3OHBweGprNA=="><h2 className='text-xl font-extrabold text-black hover:text-gray-600 transition-transform'>Visit My instagram Page</h2></Link>
                </a></div>
                <div className='w-full flex border-1 flex-col bg-gradient-to-bl from-gray-100 to-gray-300 p-4 rounded-2xl'><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:pointer ">
                  <Linkedin size={28} />
                  <Link to="https://www.linkedin.com/in/sarthakshahajijadhav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><h2 className='text-xl font-extrabold text-black hover:text-gray-600 transition-transform'>Visit My Linkdn Profile</h2></Link>
                </a></div>
              </div>
            </motion.div>

            {/* Consultation Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between border-1"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Book a Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Whether you’re curious about my services, want to explore potential collaborations, or just have a question, feel free to reach out. I’m committed to responding promptly and providing all the information you need to get started.

Your vision deserves the right partner—and I’m here to help you bring it to life.


                </p>
              </div>
              <a
                href="/consultation"
                className="w-full bg-black text-white font-bold py-3 rounded text-center hover:bg-gray-800 transition-colors"
              >
                Book Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* Extra Text Section */}
        <section
          data-scroll-section
          className="bg-gradient-to-br from-gray-500 to-gray-700 text-white py-20 px-6 md:px-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-extrabold mb-6"
            >
              We love hearing from you!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg"
            >
              Whether you have questions about services, pricing, project timelines, or anything else, I’m here to help. Feel free to reach out at any time—I’m committed to responding promptly and providing all the information you need.


            </motion.p>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default Contact;
