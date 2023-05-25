import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WebFont from "webfontloader";
import "./App.css";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Roboto Mono"],
      },
    });
  }, []);

  const clipPathStyle = {
    clipPath: `inset(0px calc(100% - ${position.x}px) 0px 0px)`,
  };

  return (
    <div className="App">
      <h1 className="title1" style={{ fontFamily: "Inter" }}>
        MATTHEW KING
      </h1>
      <div className="title-container" style={clipPathStyle}>
        <h1 className="title2" style={{ fontFamily: "Roboto Mono" }}>
          software-developer
        </h1>
      </div>
    </div>
  );
}
