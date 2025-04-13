// src/components/Projects/Projects.jsx
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import { projectData } from '../../data/projects';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Work / Projects
        </motion.h2>
        <div className={styles.grid}>
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.gridItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;