"use client";
import React, { useContext, useEffect, useState } from "react";
import FadeUp from "../components/FadeUp";
import axios from "axios";
import Project from "../components/Project";
import ProjectsMB from "../components/ProjectsMB";
import { MyContext } from "../context/ContextProvider";

export default function Projects() {
  const { theme } = useContext(MyContext);
  const [projectsArr, setprojectsArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://v2-portfolio-chi.vercel.app/projects"
      );

      const filteredData = data.filter((project) => {
        return !project.remove;
      });
      setprojectsArr(filteredData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    console.log(projectsArr, "projectsArr");
  }, [projectsArr]);

  return (
    <div className="projects relative z-40 mb-56 text-center">
      <div
        className={`uppercase text-xl mb-4 text-${theme}-700 font-mono font-light`}
      >
        <FadeUp delay={0.1} text="my portfolio" />
      </div>
      <div
        className={`capitalize text-4xl sm:text-4xl md:text-6xl w-11/12 text-${theme}-700 font-bold`}
      >
        <FadeUp delay={0.1} text="Check out my work" />
      </div>

      {/* Projects Section */}
      <div className="mx-5 sm:mx-12 mt-24 flex flex-col-reverse">
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            {/* Displaying  products */}
            {projectsArr.map((project, i) => {
              return (
                <FadeUp
                  delay={0.1}
                  text={<Project index={i + 1} project={project} />}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
