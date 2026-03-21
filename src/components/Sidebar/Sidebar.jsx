import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import styles from './Sidebar.module.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaGithub />, href: 'https://www.github.com/nikhilgoduguchintha', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/nikhil-goduguchintha/', label: 'LinkedIn' },
  { icon: <FaMediumM />, href: 'https://medium.com/@nikhilnikki747', label: 'Medium' },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs, i) => {
        const el = document.getElementById(sectionIds[i]);
        if (obs && el) obs.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Top: Identity */}
      <motion.div
        className={styles.identity}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.name}>Nikhil Goduguchintha</h1>
        <h2 className={styles.title}>Full-Stack Engineer</h2>
        <div className={styles.availableBadge}>
          <span className={styles.availableDot} />
          Available for freelance
        </div>
        <p className={styles.tagline}>
          I build fast, accessible, and impactful web experiences for the modern web.
        </p>
      </motion.div>

      {/* Middle: Nav */}
      <motion.nav
        className={styles.nav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '');
          const isActive = activeSection === sectionId;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className={styles.navLine} />
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          );
        })}
      </motion.nav>

      {/* Bottom: Resume + Socials */}
      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="/Nikhil_Goduguchintha_Resume.pdf"
          download
          className={styles.resumeBtn}
        >
          <HiDownload />
          Download Resume
        </a>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={styles.socialIcon}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
