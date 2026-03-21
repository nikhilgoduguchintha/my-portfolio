import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.sectionHeading}>About</h2>
      <div className={styles.content}>
        <p>
          I'm a Full-Stack Engineer with 5+ years of experience building fast, accessible, and scalable web applications.
          I've delivered impactful solutions at companies like{' '}
          <a href="https://www.lloydsbank.com" target="_blank" rel="noopener noreferrer">Lloyds Technology Centre</a>,{' '}
          <a href="https://www.cloud4c.com" target="_blank" rel="noopener noreferrer">Cloud4C</a>, and{' '}
          <a href="https://www.techmahindra.com" target="_blank" rel="noopener noreferrer">Tech Mahindra</a> — working on everything from high-traffic e-commerce platforms to mission-critical cloud infrastructure tools.
        </p>
        <p>
          My sweet spot is the intersection of clean UI and solid engineering. I enjoy building things that are
          not just functional, but intuitive — with a strong focus on performance, WCAG accessibility, and
          maintainable component architecture.
        </p>
        <p>
          Outside of my day job, I freelance on React and full-stack projects, write technical articles on{' '}
          <a href="https://medium.com/@nikhilnikki747" target="_blank" rel="noopener noreferrer">Medium</a>,
          and occasionally sharpen my problem-solving skills on LeetCode. I believe in building things that
          genuinely help people — and having fun doing it.
        </p>
      </div>
    </section>
  );
}

export default About;
