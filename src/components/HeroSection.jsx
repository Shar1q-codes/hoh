import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../styles/HeroSection.module.css";
import charminarImg from "../assets/charminar.png";

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: true, // Use layoutEffect for more reliable scroll tracking
  });

  // Adjust the transform ranges for more noticeable effects
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 1000]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0]);

  return (
    <section className={styles.heroContainer} ref={heroRef}>
      <motion.div
        className={styles.heroText}
        style={{ y: textY }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h1>
          A city isn't built by stone.<br />It's built by spirit.
        </h1>
        <p>
          From quiet changemakers to bold visionaries,<br />Hyderabad pulses with unsung heroes.
        </p>
      </motion.div>
      <motion.img
        src={charminarImg}
        alt="Charminar monument in Hyderabad"
        className={styles.heroImage}
        style={{ 
          x: imageX, 
          opacity: imageOpacity,
          willChange: "transform, opacity" 
        }}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        draggable={false}
      />
    </section>
  );
};

export default HeroSection;
