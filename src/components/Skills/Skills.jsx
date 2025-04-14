import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import styles from './Skills.module.css';

function Skills() {
  const getIcon = (skillName) => {
    return '●';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className={`container ${styles.skillsSection}`}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>
      <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
      >
        {Object.entries(skillsData).map(([category, skillsList]) => (
          <motion.div
            key={category}
            variants={cardVariants}
            className={styles.skillCard}
          >
            <h3 className={styles.categoryTitle}>
              {category}
            </h3>
            <ul className={styles.skillList}>
              {skillsList.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                  <span className={styles.skillIcon}>{getIcon(skill.name)}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
export default Skills;