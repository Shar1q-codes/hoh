import React, { useEffect, useState } from "react";
import "../styles/Intro.css";

const texts = ["Lights", "Camera", "Awards"];

const Intro = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (current < texts.length) {
      setDisplayText(texts[current]);

      const timer = setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 800);
    }
  }, [current, onComplete]);

  return (
    <div className="intro-container">
      <h1 className="zoom-text" key={displayText}>
        {displayText}
      </h1>
    </div>
  );
};

export default Intro;
