import React from 'react';
import Navbar from './Navbar.jsx';
import SmoothScroll from './SmoothScrolling.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web Design',
        description:
            'We craft visually stunning, responsive websites tailored to your brand identity and audience expectations, ensuring your online presence stands out.',
        icon: '🎨',
    },
    {
        title: 'Development',
        description:
            'From front-end interactivity to robust back-end systems, we develop scalable, secure solutions that drive real business outcomes.',
        icon: '💻',
    },

];

const Services = () => {
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
                            OUR <span className="text-orange-400">SERVICES and SKILLS</span>{' '}
                            <span className="text-7xl ml-2">⚡</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-gray-300 text-lg mt-6"
                        >
                            From strategy to execution, I deliver modern, end-to-end solutions designed to help you succeed in the digital world.

Whether you need a fast, responsive website, a powerful backend system, or an engaging mobile app, I combine technical skill with a dedication to continuous learning to bring your ideas to life.
                        </motion.p>
                    </div>
                </section>

                {/* Services Grid */}
                <section
                    data-scroll-section
                    className="bg-[#f7f7f7] text-gray-800 py-20 px-6 md:px-16"
                >
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative group cursor-pointer"
                            >
                                {/* Main Card */}
                                <div className="bg-white rounded-xl border-4 border-gray-500 p-6 shadow-lg">
                                    <div className="text-4xl">{service.icon}</div>
                                    <h3 className="text-4xl font-extrabold mt-2">{service.title}</h3>
                                </div>
                                {/* Hover Description Overlay */}
                                <div
                                    className="absolute inset-0 bg-cyan-400 rounded-xl p-6 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                                    style={{ zIndex: 20 }}
                                >
                                    <p className="text-gray-700 text-center font-extrabold">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section
                    data-scroll-section
                    className="bg-gradient-to-tr from-gray-600 to-gray-900 text-white py-20 px-6 md:px-16"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-extrabold mb-6"
                        >
                            About Our Work
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300 text-lg"
                        >
                            We believe in blending creativity, strategy, and technology to create solutions that make a lasting impact. Our team is dedicated to understanding your vision and delivering work that exceeds expectations.
                        </motion.p>
                    </div>
                </section>

                <Footer />
            </SmoothScroll>
        </>
    );
};

export default Services;
