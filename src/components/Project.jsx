import React, { useContext, useRef } from "react";
import { MyContext } from "../context/ContextProvider";
import { FaGithub } from "react-icons/fa";
import { Roboto } from "next/font/google";

const robotoHeading = Roboto({ subsets: ["latin"], weight: "700" });
const robotoDesc = Roboto({ subsets: ["latin"], weight: "300" });

export default function Project({ project }) {
  const { theme } = useContext(MyContext);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "block";
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "none";
      videoRef.current.pause();
    }
  };

  const getEmbeddedUrl = (googleDriveUrl) => {
    // Extract the VIDEO_ID from the Google Drive URL
    const VIDEO_ID = googleDriveUrl.match(/\/file\/d\/(.+?)\//)[1];
    // Construct the embedded URL
    return `https://drive.google.com/uc?export=download&id=${VIDEO_ID}`;
  };

  return (
    <>
      <div
        className={`relative border-2 mb-5 border-${theme}-600 md:h-72 flex md:flex-row flex-col`}
      >
        {/* Project Image BG */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="md:w-2/5 h-56 md:h-full relative"
        >
          <video
            ref={videoRef}
            src={project.video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ display: "none" }}
          ></video>
          <div
            style={{
              background: `url(${project.img}) center/cover`,
            }}
            className="w-full h-full"
          ></div>
        </div>

        {/* Info */}
        <div
          className={`info  md:w-3/5 mx-auto relative z-40 bg-${theme}-600 text-white font-semibold md:text-4xl text-2xl items-start justify-between flex flex-col px-4 md:py-7 py-4 space-y-3`}
        >
          <div className="text-start md:space-y-3 space-y-1">
            <span className={` ${robotoHeading.className} `}>
              {project.title}
            </span>
            <div
              className={` ${robotoDesc.className} font-light text-sm md:text-lg `}
            >
              {project.desc}
            </div>
          </div>

          <div className="text-start w-full flex flex-row  justify-between items-center ">
            <a
              target="_"
              className={`text-lg text-center md:w-36 block w-full border hover:bg-slate-200 border-slate-50 text-${theme}-700 md:rounded-md rounded-sm bg-white md:px-4 px-2 md:py-2 py-1`}
              href={project.link}
            >
              View
            </a>

            <a target="_" href={project.github}>
              <div className="git cursor-pointer opacity-70 hover:opacity-100">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
