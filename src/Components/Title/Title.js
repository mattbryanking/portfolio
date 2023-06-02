import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { easeInOut, motion } from "framer-motion";
import WebFont from "webfontloader";

import instawhite from "../../Assets/Icons/insta-white.png";
import instablack from "../../Assets/Icons/insta-black.png";
import githubwhite from "../../Assets/Icons/github-white.jpg";
import githubblack from "../../Assets/Icons/github-black.png";

import Blob from "./Blob/Blob";
import "./Title.css";

const words = [
  "SOFTWARE_DEVELOPER",
  "softwareDeveloper",
  "software-developer",
  '"Software Developer"',
  "SoftwareDeveloper",
  "(software-developer)",
];

export default function Title() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [stopScrollOnLoad, setStopScrollOnLoad] = useState({
    position: "fixed",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 700);

    return () => clearInterval(intervalId);
  }, [currentWordIndex]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Roboto Mono"],
      },
    });

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setStopScrollOnLoad({ position: "absolute" });
    }, 3000);
    return () => clearTimeout(timer);

    // document.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   document.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  // const handleMouseMove = (event) => {
  //   setPosition({ x: event.clientX, y: event.clientY });
  // };

  return (
    <div className="Title">
      <div className="title1-container" style={stopScrollOnLoad}>
        <motion.div
          initial={{ top: "100%" }}
          animate={{ top: "0%" }}
          transition={{
            ease: [0.215, 0.61, 0.355, 1],
            duration: 1.5,
          }}
          className="blob-container"
        >
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </motion.div>
        <motion.h1
          //animate upwards on load, text centered horizontally
          initial={{ top: "130%" }}
          animate={{ top: "40%" }}
          transition={{
            ease: [0.215, 0.61, 0.355, 1],
            duration: 1.5,
            delay: 0.3,
          }}
          className="title1"
          style={{ fontFamily: "Inter" }}
        >
          Matthew Bryan King
        </motion.h1>
        <div className="buttons">
          <a
            href="https://github.com/mattbryanking"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubwhite} alt="github icon" />
          </a>
          <a
            href="https://www.instagram.com/matt.le.fleur/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instawhite} alt="instagram icon" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{
          ease: [0.215, 0.61, 0.355, 1],
          duration: 1.5,
          delay: 1.5,
        }}
        className="title2-container"
      >
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
        <h1 className="title2" style={{ fontFamily: "Roboto Mono" }}>
          {words[currentWordIndex]}
        </h1>
        <div className="buttons">
          <a
            href="https://github.com/mattbryanking"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubblack} alt="github icon" />
          </a>
          <a
            href="https://www.instagram.com/matt.le.fleur/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instablack} alt="instagram icon" />
          </a>
        </div>
        <motion.div
          initial={{ top: "-5%" }}
          animate={{ top: "2.3%" }}
          transition={{
            ease: [0.215, 0.61, 0.355, 1],
            duration: 1.5,
            delay: 1.7,
          }}
          className="links"
        >
          <button style={{ fontFamily: "Inter" }} className="button-left">
            MATTHEW KING
          </button>
          <button style={{ fontFamily: "Inter" }}>about</button>
          <button style={{ fontFamily: "Inter" }}>projects</button>
          <button style={{ fontFamily: "Inter" }}>contact</button>
        </motion.div>
      </motion.div>
    </div>
  );
}
