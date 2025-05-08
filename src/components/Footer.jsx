import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/heroesofhyd', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/heroesofhyd', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/heroesofhyd', icon: 'instagram' },
    { name: 'Facebook', url: 'https://facebook.com/heroesofhyd', icon: 'facebook' }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div className={styles.brand} variants={itemVariants}>
            <img src="/images/logo.svg" alt="Heroes of Hyderabad" />
            <p>Celebrating innovation and excellence in Hyderabad's tech ecosystem</p>
          </motion.div>

          <motion.div className={styles.links} variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#why">Why Now?</a></li>
              <li><a href="#jury">Jury</a></li>
              <li><a href="#advisory">Advisory</a></li>
              <li><a href="#guests">Guests</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
            </ul>
          </motion.div>

          <motion.div className={styles.contact} variants={itemVariants}>
            <h3>Contact Us</h3>
            <p>Email: info@heroesofhyderabad.com</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Address: Hyderabad, Telangana, India</p>
          </motion.div>

          <motion.div className={styles.social} variants={itemVariants}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab fa-${link.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.bottom}
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Heroes of Hyderabad. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 