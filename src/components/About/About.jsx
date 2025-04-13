// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
// Import desired icons from react-icons
import { FaCode, FaPuzzlePiece, FaSearch, FaReact, FaServer, FaTachometerAlt, FaUniversalAccess } from 'react-icons/fa'; // Example icons
import { IoSparklesSharp } from "react-icons/io5"; // Example for Enthusiast

function About() {
  // Keep your core professional narrative
  const aboutContentP1 = "I'm a passionate Software Engineer...";
  const aboutContentP2 = "Currently, at Lloyds Technology Centre...";
  const aboutContentP3 = "I thrive on tackling challenging problems...";

  // Define the highlights
  const highlights = [
    {
      icon: <FaPuzzlePiece />,
      title: "Problem Solver",
      text: "Enjoy tackling complex challenges and finding efficient solutions. Regularly sharpen my algorithmic thinking on platforms like LeetCode."
    },
    {
      icon: <IoSparklesSharp />, // Or FaSearch, FaCode, etc.
      title: "Tech Enthusiast",
      text: "Constantly exploring new web technologies, frameworks, and best practices to stay ahead of the curve and build better applications."
    },
    {
      icon: <FaReact />, // Or a more general UI icon
      title: "Frontend Focused",
      text: "Passionate about crafting intuitive, performant, and accessible user interfaces with a keen eye for detail and user experience."
    },
    {
      icon: <FaServer />,
      title: "Backend Curious",
      text: "Experienced in contributing to backend tasks and interested in understanding the full stack to build more cohesive applications."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Performance Minded",
      text: "Focused on writing efficient code, optimizing assets, and leveraging techniques to ensure fast load times and smooth interactions."
    },
    {
      icon: <FaUniversalAccess />,
      title: "Accessible Development",
      text: "Committed to building inclusive applications that work for everyone by adhering to WCAG standards and accessibility best practices."
    }
  ];

  // Animation Variants
  const narrativeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };
  const paragraphVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const highlightsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };
  const highlightCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="about" className={`container ${styles.aboutSection}`}>
      <motion.h2
        // className={styles.heading} - Using global h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Narrative Section */}
      <motion.div
        className={styles.narrativeWrapper}
        variants={narrativeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={paragraphVariant}>{aboutContentP1}</motion.p>
        <motion.p variants={paragraphVariant}>{aboutContentP2}</motion.p>
        <motion.p variants={paragraphVariant}>{aboutContentP3}</motion.p>
      </motion.div>

      {/* Highlights Section */}
      <div className={styles.highlightsSection}>
        <h3 className={styles.highlightsHeading}>More Than Just Code...</h3>
        <motion.div
          className={styles.highlightsGrid}
          variants={highlightsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
         >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={styles.highlightCard}
              variants={highlightCardVariants}
            >
              <span className={styles.highlightIcon}>{item.icon}</span>
              <h4 className={styles.highlightTitle}>{item.title}</h4>
              <p className={styles.highlightText}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default About;