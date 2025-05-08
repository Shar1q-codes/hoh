import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/SectionSponsors.module.css';

const sponsors = [
  {
    name: "TechCorp",
    tier: "Platinum",
    logo: "/images/sponsor-1.svg",
    description: "Leading technology solutions provider"
  },
  {
    name: "InnovateLabs",
    tier: "Gold",
    logo: "/images/sponsor-1.svg",
    description: "Research and development powerhouse"
  },
  {
    name: "FutureTech",
    tier: "Silver",
    logo: "/images/sponsor-1.svg",
    description: "Emerging technology innovator"
  },
  {
    name: "SmartCity Solutions",
    tier: "Silver",
    logo: "/images/sponsors/smartcity.png",
    description: "Urban innovation specialists"
  },
  {
    name: "DataSphere",
    tier: "Silver",
    logo: "/images/sponsors/datasphere.png",
    description: "Data analytics and AI experts"
  },
  {
    name: "EcoTech",
    tier: "Silver",
    logo: "/images/sponsors/ecotech.png",
    description: "Sustainable technology solutions"
  }
];

const SectionSponsors = () => {
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
        staggerChildren: 0.15
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
    <section className={styles.sectionSponsors} ref={React.useRef(null)}>
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
            Our Sponsors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are proud to partner with industry leaders who share our vision
            for transforming Hyderabad into a global technology hub. Their support
            enables us to create meaningful impact in our community.
          </motion.p>
        </div>

        <motion.div 
          className={styles.sponsorsGrid}
          variants={containerVariants}
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              className={`${styles.sponsorCard} ${styles[sponsor.tier.toLowerCase()]}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.logoContainer}>
                <img src={sponsor.logo} alt={sponsor.name} />
                <div className={styles.logoGlow} />
              </div>
              <div className={styles.cardContent}>
                <h3>{sponsor.name}</h3>
                <span className={styles.tier}>{sponsor.tier}</span>
                <p>{sponsor.description}</p>
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
            Become a Sponsor
            <div className={styles.buttonGlow} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionSponsors; 