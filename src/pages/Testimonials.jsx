"use client";
import React, { useContext, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "../components/FadeUp";
import { MyContext } from "../context/ContextProvider";

export default function Testimonials() {
  const { theme } = useContext(MyContext);
  const i = 0.2;
  const [expanded, setExpanded] = useState({});
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });
  
  const MAX_LENGTH = 150; // Character limit before showing expand/collapse
  
  const toggleExpand = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const isLong = (text) => text.length > MAX_LENGTH;
  
  const getTruncatedText = (text) => {
    return text.substring(0, MAX_LENGTH) + "...";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
  };

  return (
    <div className={`testimonials relative z-40 mb-56 px-3 md:px-10 text-${theme}-700 overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className={`absolute -top-20 -right-20 w-96 h-96 rounded-full bg-${theme}-100 opacity-20 blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-${theme}-100 opacity-20 blur-3xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="text-center mb-16 relative z-10">
        <div
          className={`uppercase text-sm tracking-wider text-${theme}-700 font-mono font-medium mb-4`}
        >
          <FadeUp delay={i} text="TESTIMONIALS" />
        </div>
        <div
          className={`text-4xl sm:text-4xl md:text-6xl font-bold text-${theme}-700 mb-4`}
        >
          <FadeUp delay={i + 0.1} text="What Clients Say" />
        </div>
        <p className={`text-lg text-${theme}-700 opacity-80 max-w-2xl mx-auto`}>
          <FadeUp
            delay={i + 0.2}
            text="Hear from the teams and clients I've worked with"
          />
        </p>
      </div>

      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              y: -8,
              transition: { duration: 0.3 }
            }}
            className={`relative bg-white border-2 border-${theme}-200 rounded-xl p-6 hover:border-${theme}-400 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden group`}
          >
            {/* Animated background gradient on hover */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br from-${theme}-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-xl`}
              whileHover={{ scale: 1.05 }}
            ></motion.div>
            
            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-${theme}-100/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Animated quote icon */}
            <motion.div 
              className="mb-4"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className={`w-10 h-10 text-${theme}-700 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </motion.div>
            
            {/* Testimonial text with smooth expand/collapse */}
            <motion.div 
              className="mb-6"
              layout
            >
              <motion.p 
                className={`text-gray-700 text-base leading-relaxed font-sans`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {isLong(testimonial.text) && !expanded[index]
                  ? getTruncatedText(testimonial.text)
                  : testimonial.text}
              </motion.p>
              {isLong(testimonial.text) && (
                <motion.button
                  onClick={() => toggleExpand(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-3 text-sm font-medium text-${theme}-700 hover:text-${theme}-800 underline transition-colors cursor-pointer flex items-center gap-1`}
                >
                  {expanded[index] ? (
                    <>
                      <span>Read Less</span>
                    
                        ↑
                    </>
                  ) : (
                    <>
                      <span>Read More</span>
                     
                        ↓
                    </>
                  )}
                </motion.button>
              )}
            </motion.div>
            
            {/* Author info with animated border */}
            <motion.div 
              className={`border-t border-gray-200 pt-4 relative`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className={`absolute top-0 left-0 w-0 h-0.5 bg-${theme}-700 group-hover:w-full transition-all duration-500`}></div>
              
              <motion.div 
                className={`font-semibold text-${theme}-700 text-lg mb-1`}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {testimonial.name}
              </motion.div>
              <div className={`text-sm text-${theme}-600 opacity-80 mb-3`}>
                {testimonial.occupation}
              </div>
              {testimonial.link && (
                <motion.a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`text-sm text-${theme}-700 hover:text-${theme}-800 underline font-medium transition-colors inline-flex items-center gap-1`}
                >
                  View Review
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Testimonials data
const testimonials = [
  {
    name: "Muhammad Jawad Mansoor",
    occupation: "React Native Developer | Frontend Expert",
    text: "I highly recommend Hamza for React and web development projects. I hired him as a freelancer, and he consistently impressed me with his deep understanding of React, clean code, and responsiveness to feedback. His attention to detail and problem-solving skills added great value to our project, ensuring a smooth user experience. Hamza is skilled, professional, and delivers on time. I look forward to working with him again.",
    link: null
  },
  {
    name: "Luis Casas",
    occupation: "CEO, Market Terminal",
    text: "Hamza is great!",
    link: null
  },
  {
    name: "Sufyan Khan",
    occupation: "Agentic AI Engineer",
    text: "Hired Hamza as a freelancer for a CRM project for my tax consultancy. He developed the CRM as it was in the design - the professionalism and quality of work was impressive. Will definitely hire him again for my next project.",
    link: null
  }
];

