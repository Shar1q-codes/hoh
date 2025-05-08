import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../styles/SectionWhy.module.css";

// Timeline data with years and achievements
const timelineData = [
  { year: "1990", achievement: "IT Revolution Begins", icon: "🚀" },
  { year: "2000", achievement: "Cyber City Emerges", icon: "💻" },
  { year: "2010", achievement: "Startup Ecosystem", icon: "💡" },
  { year: "2020", achievement: "Global Tech Hub", icon: "🌍" },
  { year: "2024", achievement: "Future Leaders", icon: "⭐" },
];

const SectionWhy = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const timelineX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);
  const facesOpacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]), springConfig);
  const facesScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]), springConfig);

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Timeline item variants
  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className={styles.sectionWhy} ref={sectionRef}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.floatingParticles} />
      
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className={styles.textContent}
          style={{ y: textY }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Because real heroes don't wait for applause.
          </motion.h2>
          <motion.div
            className={styles.textBlocks}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={timelineVariants}>
              While the world scrolls past headlines, we pause to honour the people writing them.
            </motion.p>
            <motion.p variants={timelineVariants}>
              In classrooms, clinics, kitchens, codebases — they're redefining what it means to lead.
            </motion.p>
            <motion.p variants={timelineVariants}>
              We're not just telling their stories. We're making sure they echo.
            </motion.p>
          </motion.div>
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
              custom={index}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                left: `${(index / (timelineData.length - 1)) * 100}%`,
              }}
            >
              <motion.div 
                className={styles.timelineDot}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <span className={styles.icon}>{item.icon}</span>
              </motion.div>
              <motion.div 
                className={styles.timelineContent}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <span className={styles.year}>{item.year}</span>
                <span className={styles.achievement}>{item.achievement}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.facesContainer}
          style={{ opacity: facesOpacity, scale: facesScale }}
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className={styles.face}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
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