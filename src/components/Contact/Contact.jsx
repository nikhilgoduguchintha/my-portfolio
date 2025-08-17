// src/components/Contact/Contact.jsx
import React from 'react';
import ContactForm from '../ContactForm/ContactForm'; // Import using folder path
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container"> {/* Use global container */}
        <motion.h2 className={styles.heading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.introText}>
            Have a question, an opportunity, or just want to say hi? Send me a message!
          </p>
          <ContactForm />
          <div className={styles.linksWrapper}>
             <p className={styles.linksHeading}>Or find me on:</p>
             <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/nikhil-goduguchintha/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                   <FaLinkedin /> <span>LinkedIn</span>
                </a>
                <a href="https://www.github.com/nikhilgoduguchintha" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                   <FaGithub /> <span>GitHub</span>
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;
