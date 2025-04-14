// src/components/Header/Header.jsx
import React, { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for menu toggle

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Function to toggle state
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    // Add relative positioning to header for absolute positioning of mobile menu
    <motion.header
      className={`${styles.header} ${styles.relativePosition}`} // Add relativePosition class
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, delay: 0.1 }}
    >
      <nav className={`container ${styles.nav}`}>
        <a href="#hero" className={styles.logoLink}>
          [GN]
        </a>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNavLinks}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen} // Accessibility attribute
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
export default Header;