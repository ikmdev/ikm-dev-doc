import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

export function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Sending...');

    const serviceID = 'service_35ed30c';  // Replace with your Service ID from EmailJS
    const templateID = 'template_jkoy4bi';  // Replace with your Template ID from EmailJS
    const userID = 'h1V68vf3GYZLE32EE';  // Replace with your User ID from EmailJS

    var fullName = event.target.firstName.value + " " + event.target.lastName.value;
    const templateParams = {
      from_name: fullName,
      reply_to: event.target._replyto.value,
      message: event.target.message.value,
      to_email: 'contact@ikm.dev'
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setIsSubmitting(false);
        setSubmitStatus('Sent!');
      }, (error) => {
        setIsSubmitting(false);
        setSubmitStatus('Failed to send');
      });
  };

  const renderButtonContent = () => {
    if (isSubmitting) {
      return 'Sending...';
    } else if (submitStatus) {
      return submitStatus;
    } else {
      return 'Send';
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Get in Touch</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input type="text" id="firstName" name="firstName" required placeholder="First Name" />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" id="lastName" name="lastName" required placeholder="Last Name" />
        </div>
        <div className={styles.inputGroup}>
          <input type="email" id="_replyto" name="_replyto" required placeholder="Email" />
        </div>

        <textarea id="message" name="message" rows={5} required placeholder="What's on your mind..."></textarea>
        <br />
        <input type="submit" value={renderButtonContent()} disabled={isSubmitting} />
      </form>
    </div>
  );
}