import React from 'react';
import { skillsData } from '../../data/skills';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionHeading}>Skills</h2>
      <div className={styles.grid}>
        {Object.entries(skillsData).map(([category, skillsList]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.badgeList}>
              {skillsList.map((skill) => (
                <span key={skill.name} className={styles.badge}>{skill.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
