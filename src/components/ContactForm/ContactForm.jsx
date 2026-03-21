import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('info');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');
    setStatusType('info');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzdjqgnq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setStatusType('success');
        form.reset();
      } else {
        const json = await response.json();
        const errorMsg = json?.errors?.map((e) => e.message).join(', ') || 'Please try again.';
        setStatus(`Failed: ${errorMsg}`);
        setStatusType('error');
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
      setStatusType('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const getStatusClass = () => {
    if (statusType === 'success') return styles.statusSuccess;
    if (statusType === 'error') return styles.statusError;
    return styles.statusMessage;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status && <p className={getStatusClass()}>{status}</p>}
    </form>
  );
}

export default ContactForm;
