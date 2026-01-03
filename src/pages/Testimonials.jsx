"use client";
import React, { useContext } from "react";
import FadeUp from "../components/FadeUp";
import { MyContext } from "../context/ContextProvider";

export default function Testimonials() {
  const { theme } = useContext(MyContext);
  const i = 0.2;

  return (
    <div className={`testimonials relative z-40 mb-56 px-3 md:px-10 text-${theme}-700`}>
      <div className="text-center mb-16">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white border-2 border-${theme}-200 rounded-lg p-6 hover:border-${theme}-400 transition-all duration-300 shadow-sm hover:shadow-md`}
          >
            <div className="mb-4">
              <svg
                className={`w-8 h-8 text-${theme}-700 opacity-50`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className={`text-gray-700 text-base leading-relaxed mb-6 font-sans`}>
              {testimonial.text}
            </p>
            <div className="border-t border-gray-200 pt-4">
              <div className={`font-semibold text-${theme}-700 text-lg mb-1`}>
                {testimonial.name}
              </div>
              <div className={`text-sm text-${theme}-600 opacity-80 mb-3`}>
                {testimonial.occupation}
              </div>
              {testimonial.link && (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm text-${theme}-700 hover:text-${theme}-800 underline font-medium transition-colors`}
                >
                  View Review →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Testimonials data - you can modify this array with your actual testimonials
const testimonials = [
  {
    name: "John Doe",
    occupation: "CEO, Tech Startup",
    text: "Exceptional work! Delivered a scalable SaaS solution that exceeded our expectations. Professional, timely, and highly skilled.",
    link: "https://linkedin.com/in/johndoe/recommendations"
  },
  {
    name: "Jane Smith",
    occupation: "Product Manager, Enterprise Corp",
    text: "Outstanding developer with deep expertise in modern web technologies. The Next.js application he built is performant and maintainable.",
    link: "https://linkedin.com/in/janesmith/recommendations"
  },
  {
    name: "Mike Johnson",
    occupation: "Founder, SaaS Platform",
    text: "Transformed our business with a robust full-stack solution. Great communication and delivered on time. Highly recommended!",
    link: "https://linkedin.com/in/mikejohnson/recommendations"
  }
];

