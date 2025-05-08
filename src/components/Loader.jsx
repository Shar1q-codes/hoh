import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <motion.div 
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.loaderContent}>
        <motion.div 
          className={styles.logo}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="/images/logo.png" alt="Heroes of Hyderabad" />
        </motion.div>
        
        <motion.div 
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        <motion.div 
          className={styles.particles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              initial={{ 
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                scale: 0
              }}
              animate={{ 
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
