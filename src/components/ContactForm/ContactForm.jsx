// src/components/ContactForm/ContactForm.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css'; // Import CSS module

// Access environment variables (Ensure .env file is set up with VITE_ prefix)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusType, setStatusType] = useState('info'); // 'info', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are not set properly!");
      setStatus('Configuration error. Cannot send message.');
      setStatusType('error');
      return;
    }

    setIsLoading(true);
    setStatus('Sending...');
    setStatusType('info');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('EmailJS Success:', result.text);
        setStatus('Message sent successfully!');
        setStatusType('success');
        form.current.reset();
      }, (error) => {
        console.error('EmailJS Failed:', error.text);
        setStatus(`Failed: ${error.text || 'Please try again.'}`);
        setStatusType('error');
      })
      .finally(() => {
         setIsLoading(false);
         // Optional: Clear status message after a few seconds
         setTimeout(() => setStatus(''), 5000);
      });
  };

  const getStatusClass = () => {
    if (statusType === 'success') return styles.statusSuccess;
    if (statusType === 'error') return styles.statusError;
    return styles.statusMessage; // Default info style (can be same as base)
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="user_name" className={styles.label}>Name</label>
        <input
          type="text" name="user_name" id="user_name" required
          className={styles.input} placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="user_email" className={styles.label}>Email</label>
        <input
          type="email" name="user_email" id="user_email" required
          className={styles.input} placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          name="message" id="message" required rows="5"
          className={styles.textarea} placeholder="Your message..."
        ></textarea>
      </div>
      <div className={styles.buttonWrapper}>
        <button type="submit" disabled={isLoading} className={styles.button} >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status && <p className={getStatusClass()}>{status}</p>}
    </form>
  );
}
export default ContactForm;