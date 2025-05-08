import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/SectionAdvisory.module.css';

const advisoryMembers = [
  {
    name: "Dr. James Wilson",
    role: "Industry Expert",
    image: "/images/advisory-1.svg",
    expertise: "Technology & Innovation"
  },
  {
    name: "Dr. Maria Garcia",
    role: "Academic Advisor",
    image: "/images/advisory-1.svg",
    expertise: "Research & Development"
  },
  {
    name: "Dr. Robert Kim",
    role: "Strategic Advisor",
    image: "/images/advisory-1.svg",
    expertise: "Business Strategy"
  }
];

const SectionAdvisory = () => {
  const { scrollYProgress } = useScroll({
    target: React.useRef(null),
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.sectionAdvisory} ref={React.useRef(null)}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.floatingParticles} />
      
      <motion.div 
        className={styles.content}
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.textContent}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Advisory Board
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our advisory board brings together industry leaders and visionaries who guide our mission
            to transform Hyderabad into a global tech innovation hub. Their expertise and insights
            help shape the future of technology in our city.
          </motion.p>
        </div>

        <motion.div 
          className={styles.advisoryGrid}
          variants={containerVariants}
        >
          {advisoryMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={styles.advisoryCard}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.cardImage}>
                <img src={member.image} alt={member.name} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p>{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className={styles.ctaButton}>
            Meet Our Advisors
            <div className={styles.buttonGlow} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionAdvisory; 