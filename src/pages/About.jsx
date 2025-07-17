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
        <p className="text-xl 2xl:text-2xl w-11/12 md:w-11/12 leading-relaxed font-sans">
          <FadeUp
            delay={i + 0.2}
            text="I'm a full stack developer with the passion of delivering web solutions to businesses. With strong foundations in Javascript, I specialize in building scalable webapps with relevant technologies."
          />
          <br />
          <FadeUp
            delay={i + 0.2}
            text="I'm Expert in Figma to Responsive Apps, NextJS, React js Apps, Typescript, MERN Stack. I've worked with several organizations to offer SaaS solutions to them and you might be the next on the list."
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
