import React from 'react';
import Navbar from './Navbar.jsx';
import SmoothScroll from './SmoothScrolling.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Website for KTE',
    role: 'Full-Stack Developer',
    description:
      'I developed a modern, responsive website for KTE, focusing on clear navigation, fast performance, and an engaging user experience. The project included backend integration and mobile optimization to support the client’s growing digital presence.',
    image: './kte.png',
  },
  {
    title: 'Website for CAMN Deshmukh',
    role: 'Full-Stack Developer',
    description:
      'For CAMN Deshmukh, I created a professional website that highlights their services and builds credibility with potential clients. The project emphasized clean layout design, intuitive content structure, and a seamless browsing experience on all devices.',
    image: './camnd.png',
  },
  {
    title: 'Inspectra – Full-Fledged Application',
    role: 'Full-Stack Developer & Technical Lead',
    description:
      'Inspectra was a comprehensive project involving end-to-end development of a robust web application. I worked on frontend interfaces, backend APIs, and deployment workflows, delivering a scalable solution tailored to the client’s operational needs.',
    image: './inspectra.png',
  },
];

const Projects = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />

        {/* Hero */}
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
              Recent <span className="text-cyan-400">Projects</span>{' '}
              <span className="text-3xl ml-2">🚀</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 text-lg mt-6"
            >
              Over the past few months, I’ve had the opportunity to work on a range of projects—from designing intuitive websites to developing full-fledged applications. My focus has been to combine clean, scalable code with thoughtful design to create solutions that drive results
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section
          data-scroll-section
          className="bg-[#f7f7f7] text-gray-800 py-20 px-6 md:px-16"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer border-4 border-gray-400 hover:border-cyan-600 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{project.role}</p>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Text Section */}
        <section
          data-scroll-section
          className="bg-gradient-to-bl from-gray-500 to-gray-600 text-white py-16 px-6 md:px-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-extrabold mb-4"
            >
              Building with Passion
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg"
            >
              Every project reflects my dedication to quality, user experience, and meaningful results. Whether it’s a full-stack web application, a modern mobile platform, or a streamlined backend system, I’m committed to delivering work that makes a real difference.
            </motion.p>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default Projects;
