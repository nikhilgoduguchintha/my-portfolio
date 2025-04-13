// src/components/Header/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

function Header() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Using motion for initial animation
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, delay: 0.1 }}
    >
      <nav className={`container ${styles.nav}`}> {/* Combine container + nav styles */}
        <a href="#hero" className={styles.logoLink}>
          [GN] {/* Replace */}
        </a>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}
        </div>
         {/* Placeholder for Mobile Menu Button */}
         <button className={styles.mobileMenuButton} aria-label="Toggle menu">
           {/* Add SVG Icon here */} Menu
         </button>
      </nav>
    </motion.header>
  );
}
export default Header;