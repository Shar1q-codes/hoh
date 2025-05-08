import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/SectionGuests.module.css';

const guests = [
  {
    name: "Dr. Emily Chen",
    role: "Keynote Speaker",
    image: "/images/guest-1.svg",
    expertise: "Future of Technology"
  },
  {
    name: "David Kumar",
    role: "Panel Speaker",
    image: "/images/guest-1.svg",
    expertise: "Innovation & Entrepreneurship"
  },
  {
    name: "Dr. Lisa Patel",
    role: "Workshop Leader",
    image: "/images/guest-1.svg",
    expertise: "Research & Development"
  },
  {
    name: "Dr. Aisha Khan",
    role: "Keynote Speaker",
    image: "/images/guests/aisha-khan.jpg",
    expertise: "AI Ethics & Responsible Innovation"
  },
  {
    name: "Rahul Mehta",
    role: "Panel Moderator",
    image: "/images/guests/rahul-mehta.jpg",
    expertise: "Tech Industry Analyst & Thought Leader"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Workshop Leader",
    image: "/images/guests/priya-sharma.jpg",
    expertise: "Sustainable Technology Solutions"
  },
  {
    name: "Vikram Patel",
    role: "Panel Speaker",
    image: "/images/guests/vikram-patel.jpg",
    expertise: "Digital Transformation Expert"
  },
  {
    name: "Sarah Chen",
    role: "Workshop Leader",
    image: "/images/guests/sarah-chen.jpg",
    expertise: "Future of Work & Technology"
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Panel Speaker",
    image: "/images/guests/rajesh-kumar.jpg",
    expertise: "Smart City Infrastructure"
  }
];

const SectionGuests = () => {
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
    <section className={styles.sectionGuests} ref={React.useRef(null)}>
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
            Distinguished Guests
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us for inspiring talks, engaging panel discussions, and hands-on workshops
            led by industry leaders and visionaries. Our distinguished guests bring
            diverse perspectives and deep expertise to shape the future of technology.
          </motion.p>
        </div>

        <motion.div 
          className={styles.guestsGrid}
          variants={containerVariants}
        >
          {guests.map((guest) => (
            <motion.div
              key={guest.name}
              className={styles.guestCard}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.cardImage}>
                <img src={guest.image} alt={guest.name} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3>{guest.name}</h3>
                <span className={styles.role}>{guest.role}</span>
                <p>{guest.expertise}</p>
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
            View Schedule
            <div className={styles.buttonGlow} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionGuests; 