import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../styles/SectionWhy.module.css";

// Timeline data with years and achievements
const timelineData = [
  { year: "1990", achievement: "IT Revolution Begins" },
  { year: "2000", achievement: "Cyber City Emerges" },
  { year: "2010", achievement: "Startup Ecosystem" },
  { year: "2020", achievement: "Global Tech Hub" },
  { year: "2024", achievement: "Future Leaders" },
];

const SectionWhy = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const timelineX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const facesOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const facesScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.sectionWhy} ref={sectionRef}>
      <div className={styles.backgroundOverlay} />
      
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className={styles.textContent}
          style={{ y: textY }}
        >
          <motion.h2 variants={itemVariants}>
            Because real heroes don't wait for applause.
          </motion.h2>
          <motion.p variants={itemVariants}>
            While the world scrolls past headlines, we pause to honour the people writing them.
          </motion.p>
          <motion.p variants={itemVariants}>
            In classrooms, clinics, kitchens, codebases — they're redefining what it means to lead.
          </motion.p>
          <motion.p variants={itemVariants}>
            We're not just telling their stories. We're making sure they echo.
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.timelineContainer}
          style={{ x: timelineX }}
        >
          <div className={styles.timelineLine} />
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className={styles.timelineItem}
              variants={itemVariants}
              style={{
                left: `${(index / (timelineData.length - 1)) * 100}%`,
              }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <span className={styles.year}>{item.year}</span>
                <span className={styles.achievement}>{item.achievement}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.facesContainer}
          style={{ opacity: facesOpacity, scale: facesScale }}
        >
          {/* Placeholder for faces - replace with actual images */}
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className={styles.face}
              style={{
                left: `${(index / 4) * 100}%`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionWhy; 