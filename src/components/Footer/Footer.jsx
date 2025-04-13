// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Optional Links */}
        <div className={styles.footerLinks}>
           <a href="https://www.linkedin.com/in/nikhil-goduguchintha/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
           <a href="https://github.com/nikhilgoduguchintha" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} [Nikhil G]. All rights reserved.
        </p>
        <p className={styles.builtWith}>
          Built with React & Vite. Styled with CSS Modules. Animated with Framer Motion.
        </p>
      </div>
    </footer>
  );
}
export default Footer;