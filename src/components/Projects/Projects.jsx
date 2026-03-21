import React from 'react';
import { projectData } from '../../data/projects';
import styles from './Projects.module.css';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionHeading}>Projects</h2>
      <div className={styles.list}>
        {projectData.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl || '#'}
            target={project.liveUrl ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`${styles.card} ${!project.liveUrl ? styles.noLink : ''}`}
            onClick={!project.liveUrl ? (e) => e.preventDefault() : undefined}
          >
            <div className={styles.cardLeft}>
              <span className={styles.cardNumber}>0{project.id}</span>
            </div>
            <div className={styles.cardRight}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {project.title}
                  {project.liveUrl && <FiExternalLink className={styles.extIcon} />}
                </h3>
                <span className={styles.company}>{project.company}</span>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.techList}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
