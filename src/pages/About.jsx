"use client";
import React, { lazy, useContext, Suspense, useState, useEffect } from "react";
import FadeUp from "../components/FadeUp";
import { MyContext } from "../context/ContextProvider";

const Reveal = lazy(() => import("../components/Reveal"));
export default function About() {
  const { theme } = useContext(MyContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((c) => c + 1);
  }, [theme]);

  const i = 0.2;

  return (
    <>
      <div
        className={`about-page relative z-40 min-h-[750px] text-${theme}-700 flex flex-col md:flex-row items-center gap-12 mt-36 sm:mt-52 mb-11 px-3 md:px-10`}
      >
        <div className="text space-y-8 md:w-3/5">
          <div
            className={`uppercase text-sm tracking-wider text-${theme}-700 font-mono font-medium`}
          >
            <FadeUp delay={i} text="ABOUT" />
          </div>
          <div className="text-5xl sm:text-5xl w-full md:text-6xl font-bold leading-tight">
            <FadeUp delay={i} text="Engineering Scalable Solutions" />
          </div>
          <div className="space-y-4 text-lg 2xl:text-xl leading-relaxed font-sans opacity-90">
            <p>
              <FadeUp
                delay={i + 0.2}
                text="Full-Stack Engineer specializing in building scalable web applications and SaaS solutions. I transform business requirements into robust, performant systems using modern JavaScript technologies."
              />
            </p>
            <p>
              <FadeUp
                delay={i + 0.3}
                text="Expert in Next.js, React, TypeScript, and the MERN stack. I deliver end-to-end solutions—from design to deployment—with a focus on performance, maintainability, and user experience."
              />
            </p>
          </div>
        </div>

        <div className="md:w-2/5 w-full flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Animated geometric design */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`absolute w-64 h-64 border-2 border-${theme}-700 opacity-20 rounded-lg rotate-12 animate-pulse`}
                style={{ animationDuration: '3s' }}
              ></div>
              <div
                className={`absolute w-56 h-56 border-2 border-${theme}-700 opacity-30 rounded-lg -rotate-12 animate-pulse`}
                style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
              ></div>
              <div
                className={`absolute w-48 h-48 border-2 border-${theme}-700 opacity-40 rounded-lg rotate-45 animate-pulse`}
                style={{ animationDuration: '2s', animationDelay: '1s' }}
              ></div>
            </div>
            
            {/* Stats or Tech Focus */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
              <div className="text-center">
                <div className={`text-5xl font-bold text-${theme}-700`}>
                  <FadeUp delay={i + 0.5} text="3.5" />
                </div>
                <div className={`text-xs uppercase tracking-wider text-${theme}-700 opacity-70 mt-1`}>
                  <FadeUp delay={i + 0.6} text="Years Experience" />
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-5xl font-bold text-${theme}-700`}>
                  <FadeUp delay={i + 0.7} text="12+" />
                </div>
                <div className={`text-xs uppercase tracking-wider text-${theme}-700 opacity-70 mt-1`}>
                  <FadeUp delay={i + 0.8} text="Projects Delivered" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
