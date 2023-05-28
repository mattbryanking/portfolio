import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
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

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const clipPathStyle = {
    clipPath: `inset(0px calc(100% - ${position.x}px) 0px 0px)`,
  };

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

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="Title">
      <h1 className="title1" style={{ fontFamily: "Inter" }}>
        MATTHEW KING
      </h1>
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

      <div className="title-container" style={clipPathStyle}>
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
      </div>
    </div>
  );
}
