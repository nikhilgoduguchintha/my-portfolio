// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css'; // Import CSS Module

// Add PropTypes for better development experience (install prop-types if needed)
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  return (
    // Apply motion props directly to the element with the base card style
    <motion.div
      className={styles.card} // Use base card style
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <img
        src={project.imageUrl || "https://via.placeholder.com/600x400?text=Project+Image"}
        alt={`${project.title} screenshot`}
        className={styles.image} // Use image style
       />
      <div className={styles.content}> {/* Use content style */}
        <h3 className={styles.title}>{project.title}
          <span className={styles.company}>({project.company})</span>
        </h3>
         <p className={styles.description}>{project.description}</p>
         <p className={styles.roleInfo}>
           <span className={styles.roleLabel}>My Role:</span> {project.role}
         </p>
        <div > {/* Tech stack container */}
          <span className={styles.techStackLabel}>Tech Stack:</span>
          <div className={styles.techStackBadges}>
            {project.techStack.map(tech => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.footer}> {/* Use footer style */}
          {project.liveUrl ? (
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>Live Demo</a>
          ) : <span className={styles.linkDisabled}>Demo N/A</span>}

           {project.githubUrl ? (
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub Repo</a>
          ) : <span className={styles.linkDisabled}>Code N/A</span>}
        </div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;