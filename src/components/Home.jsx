import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar.jsx'
import SmoothScroll from './SmoothScrolling.jsx';
import Footer from './Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const speakers = [
        {
            name: 'MONGO-DB, REACT',
            role: 'Full-Stack Application Essentials',
            image: './skills/mongo-react.png',
        },
        {
            name: 'EXPRESS, NODE.JS',
            role: 'Server-Side Development',
            image: './skills/node-express.png',
        },
        {
            name: 'TYPESCRIPT, NEXT-JS',
            role: 'Modern Frontend Frameworks',
            image: './skills/NEXT-TS.png',
        },
        {
            name: 'DEVOPS, GIT',
            role: 'Automation & Version Control',
            image: './skills/devops.png',
        },
        {
            name: 'DOCKER, KUBERNETES',
            role: 'Containerization & Orchestration',
            image: './skills/docker-kuberntes.png',
        },
        {
            name: 'PYTHON',
            role: 'Scripting & Automation',
            image: './skills/python.png',
        },
        {
            name: 'AWS, CLOUD',
            role: 'Cloud Infrastructure',
            image: './skills/aws.png',
        },
    ];

    return (
        <>
            <SmoothScroll>
                <Navbar />
                <section data-scroll-section className="bg-black text-white min-h-screen px-6 md:px-16 py-12 relative overflow-hidden pt-40">
                    {/* Main Heading */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Hi <span className="text-cyan-400">I am</span>
                            <span className="inline-block ml-2 text-cyan-300 text-3xl">😊</span> <br />
                            <motion.h1
                                className="text-7xl md:text-7xl font-extrabold"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    borderRight: "3px solid #0ff"
                                }}
                            >
                                Sarthak
                            </motion.h1>
                        </h1>
                        <p className="text-gray-300 text-lg mt-6">
                            Hi, I’m Sarthak Shahaji Jadhav — a passionate MERN Stack Developer and React Native enthusiast. As a student developer, I combine fresh ideas with modern tools to help businesses and individuals bring their projects to life.
                        </p>
                    </div>

                    {/* Floating Side Images (dummy placeholders for now) */}
                    {/* <div className="hidden md:block">
                        <img src="https://via.placeholder.com/100x100" alt="left1" className="absolute left-4 top-32 rounded-xl" />
                        <img src="https://via.placeholder.com/100x100" alt="left2" className="absolute left-10 top-80 rounded-xl" />
                        <img src="https://via.placeholder.com/100x100" alt="right1" className="absolute right-4 top-32 rounded-xl" />
                        <img src="https://via.placeholder.com/100x100" alt="right2" className="absolute right-10 top-80 rounded-xl" />
                    </div> */}
                </section>
                <section data-scroll-section className="bg-gradient-to-br from-gray-800 to-gray-500 text-white py-24 px-6 md:px-16 relative overflow-hidden">
                    {/* Green Arrows */}
                    <div className="absolute top-8 left-8 text-lime-400 rotate-[-45deg] text-2xl">➤</div>
                    <div className="absolute top-8 right-8 text-lime-400 rotate-[45deg] text-2xl">➤</div>
                    <div className="absolute bottom-8 left-8 text-lime-400 rotate-[45deg] text-2xl">➤</div>
                    <div className="absolute bottom-8 right-8 text-lime-400 rotate-[-45deg] text-2xl">➤</div>

                    {/* Content */}
                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            DEDICATED TO <br />
                            DELIVERING IMPACT <br />
                            FOR EVERY CLIENT
                            <span className="inline-block align-middle mx-2">
                                <span className="inline-flex items-center justify-center bg-pink-300 text-black font-bold text-xl w-10 h-10 rounded-full">
                                    😊
                                </span>
                            </span>
                            <span className="inline-block align-middle mx-2">
                                <span className="inline-flex items-center justify-center bg-cyan-400 text-black font-bold text-xl w-10 h-10 rounded-full">
                                    ⚡
                                </span>
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg mt-6">
                            As a student developer and freelancer, I know that great results come from clear communication, curiosity, and a shared vision. Together, we’ll learn and transform ideas into meaningful digital experiences that move your goals forward.

                        </p>
                    </div>
                </section>
                <section data-scroll-section className="bg-[#f7f7f7] py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
                        {/* Left Column */}
                        <div className="flex-1 space-y-2 text-left text-gray-700">
                            {speakers.map((speaker, index) => (
                                <div
                                    key={index}
                                    className={`text-3xl md:text-5xl font-extrabold cursor-pointer transition-all duration-200 ${activeIndex === index ? 'text-black' : 'text-gray-400'
                                        }`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {speaker.name}
                                </div>
                            ))}

                            {speakers[activeIndex].role && (
                                <div className="mt-6 text-xs font-mono text-gray-800">
                                    {speakers[activeIndex].role}
                                </div>
                            )}
                        </div>

                        {/* Right Column: Animated Image */}
                        <div className="flex-1 relative h-[400px] w-full max-w-md overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={speakers[activeIndex].image}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={speakers[activeIndex].image}
                                        alt={speakers[activeIndex].name}
                                        className="rounded-lg w-full h-full object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
                <Footer />
            </SmoothScroll>
        </>
    )
}

export default Home