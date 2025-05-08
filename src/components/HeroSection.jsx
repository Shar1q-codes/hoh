import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/HeroSection.css";
import charminarImg from "../assets/charminar.png";

const HeroSection = () => {
  const textRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax the text vertically
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  // Slide image out as we scroll
  const imageX = useTransform(scrollY, [0, 300], [0, 300]);

  return (
    <section className="hero-container">
      <motion.div
        className="hero-text"
        ref={textRef}
        style={{ y: textY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1>
          A city isn’t built by stone.
          <br />
          It’s built by spirit.
        </h1>
        <p>
          From quiet changemakers to bold visionaries,
          <br />
          Hyderabad pulses with unsung heroes.
        </p>
      </motion.div>

      <motion.img
        src={charminarImg}
        alt="Charminar"
        className="hero-image"
        style={{ x: imageX }}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;
