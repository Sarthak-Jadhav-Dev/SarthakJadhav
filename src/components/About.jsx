import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import SmoothScroll from './SmoothScrolling.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    title: 'My Beginning',
    description: 'I started my journey as a curious student fascinated by how technology shapes our world. From experimenting with simple web pages to learning advanced full-stack frameworks, my focus has always been on creating solutions that blend usability with clean, effective code.',
  },
  {
    title: 'Growth',
    description: 'Over time, I expanded my skills across the MERN stack (MongoDB, Express, React, Node.js) and React Native, building everything from responsive websites to cross-platform mobile apps. As my experience grew, so did my dedication to staying current with modern best practices and emerging tools in software development.',
  },
  {
    title: 'Innovation',
    description: 'I’ve contributed to a diverse range of projects—from small business websites to full-fledged applications—each one pushing me to learn, iterate, and improve. My goal is to deliver solutions that are not only functional but thoughtfully crafted to align with each client’s unique vision.',
  },
  {
    title: 'Today',
    description: 'Today, I help startups, entrepreneurs, and organizations bring their ideas to life through clear strategy, modern development workflows, and a commitment to quality. Whether it’s designing a sleek front-end, architecting a scalable backend, or collaborating on a new product, I’m dedicated to delivering results with professionalism and care.',
  },
];

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SmoothScroll>
        <Navbar />
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
              ABOUT <span className="text-orange-400">US</span> <span className="text-3xl ml-2">🌟</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 text-lg mt-6"
            >
              I’m Sarthak Shahaji Jadhav—a passionate developer dedicated to building modern, high-performing digital products that help people and businesses make an impact online.
            </motion.p>
          </div>
        </section>

        {/* Roadmap Section */}
        <section
          data-scroll-section
          className="relative bg-[#f7f7f7] py-20 px-6 md:px-16"
        >
          {/* Vertical Progress Bar with Glow */}
          <div className="absolute left-8 top-0 bottom-0 flex flex-col items-center z-0">
            <div className="w-1 bg-blue-500 h-full relative rounded">
              <div
                className="absolute left-0 top-0 w-1 bg-white rounded shadow-[0_0_10px_5px_rgba(255,255,255,0.8)]"
                style={{ height: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Connecting Line */}
                {index !== timelineItems.length - 1 && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 h-12 w-1 bg-gray-400"
                    style={{ top: '100%' }}
                  ></div>
                )}

                <div className="w-1/2 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default About;
