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
    <div
      className={`about-page relative z-40 md:h-[750px] text-${theme}-700 flex flex-col-reverse md:flex-row items-center space-y-5 mt-36 sm:mt-52 mb-11`}
    >
      <div className="text pl-3 md:pl-10 pt-6 space-y-6 md:w-2/3">
        <div
          className={`uppercase text-xl text-${theme}-700 font-mono font-light`}
        >
          <FadeUp delay={i} text="about me" />
        </div>
        <div className="text-4xl sm:text-4xl w-full md:text-5xl font-bold capitalize">
          <FadeUp delay={i} text="Let me introduce myself" />
        </div>
        <p className="text-xl 2xl:text-3xl w-11/12 md:w-11/12 leading-relaxed font-sans">
          <FadeUp
            delay={i + 0.1}
            text="👋 Meet the Digital Dynamo: Hamza Shah! 🚀"
          />
          <br />
          <FadeUp
            delay={i + 0.2}
            text="Hey there, Future Collaborator! I'm the digital handyman you've been dreaming of – a Full Stack Developer with proven experience of 3+ years"
          />
          <br />
          <FadeUp
            delay={i + 0.2}
            text="I'm Expert in Figma to HTML, CSS, Tailwind Responsive Websites, NextJS, React js Websites, Typescript, MERN Stack Websites. I've worked with several organizations to offer web solutions to them and you might be the next on the list."
          />
        </p>
      </div>

      <div
        style={{
          backgroundImage: 'url("hamza.jpg")',
        }}
        className="image-container bg-cover md:bg-center cursor-pointer  relative rounded-xl overflow-hidden my-auto mx-4 h-[60vh] w-11/12 md:h-5/6 md:w-1/3"
      >
        {/* <img src="/hamza.jpg" alt="" /> */}
        <div
          className={`overlay absolute inset-0 bg-${theme}-700 opacity-35 transition-opacity duration-300 ease-in-out`}
        ></div>
      </div>
    </div>
  );
}
