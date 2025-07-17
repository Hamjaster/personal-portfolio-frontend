import React, { useContext, useRef } from "react";
import { MyContext } from "../context/ContextProvider";
import { FaGithub } from "react-icons/fa";
import { Roboto } from "next/font/google";
import { MdOpenInNew } from "react-icons/md";

const robotoHeading = Roboto({ subsets: ["latin"], weight: "700" });
const robotoDesc = Roboto({ subsets: ["latin"], weight: "300" });

export default function Project({ project, index }) {
  const { theme } = useContext(MyContext);

  const getEmbeddedUrl = (googleDriveUrl) => {
    // Extract the VIDEO_ID from the Google Drive URL
    const VIDEO_ID = googleDriveUrl.match(/\/file\/d\/(.+?)\//)[1];
    // Construct the embedded URL
    return `https://drive.google.com/uc?export=download&id=${VIDEO_ID}`;
  };

  return (
    <>
      <div
        className={`relative my-14 md:h-72  flex md:flex-row items-center flex-col `}
      >
        {/* Project Image BG */}
        <div className="md:w-2/5 lg:w-1/3 flex items-center justify-center my-auto md:h-full relative">
          <img src={project.img} alt="" srcset="" />
        </div>

        {/* Info */}
        <div
          className={`info md:w-3/5 mx-auto relative z-40 bg-${theme}-700 md:bg-transparent text-white  md:text-${theme}-700 font-semibold text-xl md:text-2xl lg:text-4xl  items-start justify-between flex flex-col  md:py-7 pt-2 px-2 rounded-lg md:rounded-none space-y-3`}
        >
          <div className={` text-center md:text-start `}>
            {/* Title */}
            <span className={` ${robotoHeading.className} `}>
              {project.title}
            </span>
            {/* Description */}
            <div
              className={` ${robotoDesc.className} p-3 md:bg-${theme}-700 text-white font-light text-sm md:text-base lg:text-lg mt-3 `}
            >
              {project.desc}
              <div className="mt-5 text-start w-full flex flex-row  justify-between items-center ">
                {project.link && (
                  <a
                    target="_"
                    className={`text-base lg:text-lg text-center hover:underline font-extrabold`}
                    href={project.link}
                  >
                    View Live{" "}
                    <MdOpenInNew className="inline text-base lg:text-lg mx-1" />
                  </a>
                )}

                {project.github && (
                  <a target="_" href={project.github}>
                    <div className="git text-2xl lg:text-3xl cursor-pointer icon rounded-full">
                      <FaGithub />
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="skills hidden mt-3 md:flex flex-row items-center justify-evenly text-xs lg:text-base font-mono font-light">
              {project.skills.map((s) => {
                return <span className="">{s}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
