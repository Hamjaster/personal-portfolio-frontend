import Ask from "../pages/Ask";
import { MyContext } from "../context/ContextProvider";
import { useContext } from "react";
import Footer from "../pages/Footer";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ParticlesComponent from "../components/Particles";
import Head from "next/head";

function App() {
  // eslint-disable-next-line
  const themes = [
    "bg-red-700",
    "bg-purple-700",
    "bg-blue-700",
    "bg-green-700",
    "bg-black-700",
    "bg-pink-700",

    "border-red-600",
    "border-pink-600",
    "border-purple-600",
    "border-green-600",
    "border-blue-600",
    "border-black-600",

    "bg-red-400",
    "bg-purple-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-black-400",
    "bg-pink-400",

    "hover:bg-red-800",
    "hover:bg-purple-800",
    "hover:bg-blue-800",
    "hover:bg-green-800",
    "hover:bg-black-800",
    "hover:bg-pink-800",

    "text-red-700",
    "text-pink-700",
    "text-purple-700",
    "text-blue-700",
    "text-green-700",
    "text-black-700",

    "hover:text-red-700",
    "hover:text-pink-700",
    "hover:text-purple-700",
    "hover:text-blue-700",
    "hover:text-green-700",
    "hover:text-black-700",

    "ring-red-600",
    "ring-pink-600",
    "ring-purple-600",
    "ring-blue-600",
    "ring-green-600",
    "ring-black-600",

    "after:bg-red-700",
    "after:bg-pink-700",
    "after:bg-purple-700",
    "after:bg-blue-700",
    "after:bg-green-700",
    "after:bg-black-700",

    "group-hover:text-red-700",
    "group-hover:text-pink-700",
    "hover:bg-red-700",
    "hover:bg-pink-700",
    "group-hover:text-purple-700",
    "hover:bg-purple-700",
    "group-hover:text-blue-700",
    "hover:bg-blue-700",
    "group-hover:text-green-700",
    "hover:bg-green-700",
    "group-hover:text-black-700",
    "hover:bg-black-700",
  ];

  return (
    <div className="App overflow-x-hidden">
      <>
        <Head>
          <title>Hamza Shah</title>
          <meta
            name="description"
            content="I specialize in developing custom web solutions for businesses"
            key="desc"
          />
          <meta
            property="og:title"
            content="Hamza Shah | Developer Portfolio"
          />
          <meta
            property="og:description"
            content="I specialize in developing custom web solutions for businesses"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/NGkQ5ZxB/profile.jpg"
          />

          <meta property="og:url" content="hamzashah.me" />

          <meta
            property="twitter:card"
            content="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-1/419803699_122118351206154625_5923252227130875075_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GC2szcyZft0AX_PU-bg&_nc_ht=scontent-ams4-1.xx&oh=00_AfA3mwaaIFABLHx0RnF_Hi8Yaby2SwnSH3ltb9ZFayg-xw&oe=660CBA76"
          />

          <meta property="twitter:url" content="hamzashah.me" />

          <meta
            property="twitter:title"
            content="Hamza Shah - A Developer Portfolio"
          />
          <meta
            property="twitter:description"
            content="Welcome to Hamza Shah's portfolio. I develop custom software solutions and provide web development services."
          />
          <meta
            property="twitter:image"
            content="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-1/419803699_122118351206154625_5923252227130875075_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GC2szcyZft0AX_PU-bg&_nc_ht=scontent-ams4-1.xx&oh=00_AfA3mwaaIFABLHx0RnF_Hi8Yaby2SwnSH3ltb9ZFayg-xw&oe=660CBA76"
          />
        </Head>
        <div className="absolute z-10 opacity-75">
          <ParticlesComponent />
        </div>
        <LandingPage />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
