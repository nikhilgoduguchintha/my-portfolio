// src/components/Hero.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

function Hero() {
  const headline = "Hi, I'm Goduguchintha Nikhil. A Full-Stack Engineer building intuitive and performant web experiences.";
  const intro = "With over 5 years of experience delivering impactful solutions for companies like Lloyds, Cloud4C, and Tech Mahindra (for Telefonica), I focus on creating clean code, seamless user interfaces, and engaging interactions.";

  // Ref for the section to track scroll progress within it
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"] // Track scroll from when section top hits viewport top, until section bottom hits viewport top
  });

  // Create a parallax effect for the background
  // As scrollYProgress goes from 0 to 1, move background 'y' from 0% to 50% (adjust multiplier for speed)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
   // Add another layer moving differently
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    // Add ref to the section
    <section id="hero" className={styles.heroSection} ref={targetRef}>
      {/* Parallax Background Layer */}
      <motion.div
        className={styles.heroBackground}
        style={{ y: backgroundY }} // Apply the transformed value
      />

      {/* Content Layer with its own subtle parallax */}
      <motion.div className={styles.contentWrapper} style={{ y: textY }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.headline} // Use module class
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.intro} // Use module class
        >
          {intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.buttonGroup} // Use module class
        >
          {/* Use specific button classes */}
          <a href="#projects" className={styles.ctaButton}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Get In Touch
          </a>
          <a href="../assets/resume.pdf" download="Nikhil-Resume.pdf" className={styles.secondaryButton}>
            Download resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Hero;
