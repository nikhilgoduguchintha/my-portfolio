import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Contact.module.css';
import { FaLinkedin, FaGithub, FaMediumM } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.sectionHeading}>Contact</h2>
      <div className={styles.content}>
        <p className={styles.intro}>
          Got a project in mind, a freelance opportunity, or just want to say hello?
          I'm always open to new conversations. Drop me a message and I'll get back to you.
        </p>
        <ContactForm />
        <div className={styles.socials}>
          <p className={styles.socialsLabel}>Or find me on</p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/nikhil-goduguchintha/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="https://www.github.com/nikhilgoduguchintha" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub /> <span>GitHub</span>
            </a>
            <a href="https://medium.com/@nikhilnikki747" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaMediumM /> <span>Medium</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
