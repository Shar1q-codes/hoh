import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../styles/SectionJury.module.css";

const juryMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Technology Officer",
    image: "/images/jury-1.svg",
    expertise: "AI & Machine Learning"
  },
  {
    name: "Michael Chen",
    role: "Innovation Director",
    image: "/images/jury-1.svg",
    expertise: "Product Development"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Research Lead",
    image: "/images/jury-1.svg",
    expertise: "Biotechnology"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Healthcare",
    image: "/images/jury/vikram.jpg",
    achievement: "Pioneered rural healthcare"
  }
];

const SectionJury = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const cardsX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.sectionJury} ref={sectionRef}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.floatingParticles} />
      
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
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            This isn't a popularity contest. It's judgment by the wise.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our jury doesn't just watch. They listen. They dig deep. They debate.
            These are the ones who've led, built, broken barriers — and now, they pick the trailblazers who deserve the spotlight.
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.juryGrid}
          style={{ x: cardsX }}
        >
          {juryMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={styles.juryCard}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardImage}>
                <img src={member.image} alt={member.name} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p>{member.achievement}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className={styles.ctaButton}>
            Meet the Jury
            <span className={styles.buttonGlow} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionJury; 