import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import emailjs from 'emailjs-com';

export function ContactUs() {
  
    const handleSubmit = (event) => {
      event.preventDefault();
    
      const serviceID = 'service_35ed30c';  // Replace with your Service ID from EmailJS
      const templateID = 'template_jkoy4bi';  // Replace with your Template ID from EmailJS
      const userID = 'h1V68vf3GYZLE32EE';  // Replace with your User ID from EmailJS
    
      const templateParams = {
        from_name: event.target.name.value,
        reply_to: event.target._replyto.value,
        message: event.target.message.value,
        to_email: 'seb.burner.mail@gmail.com'
      };
    
      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
           console.log('Email sent successfully', response.status, response.text);
        }, (error) => {
           console.log('Email sending failed', error);
        });
    };
    
  
    return (
      <div className={styles.contactContainer}>
        <h1>Get in Touch</h1>
  
        <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <input type="text" id="name" name="name" required placeholder="Name" />
                <input type="email" id="_replyto" name="_replyto" required placeholder="Email" />
            </div>
  
            <textarea id="message" name="message" rows={5} required placeholder="What's on your mind..."></textarea>
            <br />
            <input type="submit" value="Send" />
        </form>
      </div>
    );
  }