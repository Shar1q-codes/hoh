import React, { useEffect, useState } from "react";
import "../styles/Loader.css";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = document.images;
    const total = images.length;
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      const percent = Math.round((loaded / total) * 100);
      setProgress(percent);
      if (percent === 100) {
        setTimeout(() => {
          onComplete(); // Notify App that loading is done
        }, 500);
      }
    };

    if (total === 0) {
      setProgress(100);
      onComplete();
    } else {
      for (let img of images) {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener("load", updateProgress);
          img.addEventListener("error", updateProgress);
        }
      }
    }
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="loader-bar" style={{ width: `${progress}%` }} />
      <div className="loader-text">{progress}%</div>
    </div>
  );
};

export default Loader;
