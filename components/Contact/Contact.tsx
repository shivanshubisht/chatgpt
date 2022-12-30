'use client';
import styles from './Contact.module.css';
import linkedin from '../../images/icons/linkedin.png';
import github from '../../images/icons/github.png';
import twitter from '../../images/icons/twitter.png';
import gmail from '../../images/icons/gmail.ico';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import RubberBand from '../RubberBand/RubberBand';

const Contact = () => {
  const nameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const messageInput = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameInput.current?.value;
    const email = emailInput.current?.value;
    const message = messageInput.current?.value;
    if (!name || !email || !message) {
      return;
    }
    try {
      const { data } = await axios.post('/api/contact', {
        name,
        email,
        message,
      });
      const messageElement = document.querySelector('.message');
      if (messageElement) {
        messageElement.textContent = 'Message submitted successfully!';
        nameInput.current!.value = '';
        emailInput.current!.value = '';
        messageInput.current!.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section id='contact'>
      <div className={styles.contact_box}>
        <div className={styles.contact_links}>
          <RubberBand text='CONTACT' type='subheading' />
          <div className={styles.links}>
            <div className={styles.link}>
              <Link href='https://in.linkedin.com/in/bishtshivanshu'>
                <Image src={linkedin} alt='linkedin' />
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='https://github.com/shivanshubisht'>
                <Image src={github} alt='github' />
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='https://twitter.com/bishtshivanshu'>
                <Image src={twitter} alt='twitter' />
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='mailto:%68%65%79%73%68%69%76%61%6E%73%68%75%40%67%6D%61%69%6C%2E%63%6F%6D'>
                <Image src={gmail} alt='gmail' />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contact_form_wrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_item}>
              <input type='text' name='sender' ref={nameInput} required />
              <label>Name:</label>
            </div>
            <div className={styles.form_item}>
              <input type='email' name='email' ref={emailInput} required />
              <label>Email:</label>
            </div>
            <div className={styles.form_item}>
              <textarea
                className={styles.form_item}
                name='message'
                ref={messageInput}
                required
              ></textarea>
              <label>Message:</label>
            </div>
            <div className='message' style={{ color: '#1de4e7' }}></div>
            <button className={styles.contact_button}>
              <div>
                <span className={styles.bg}></span>
                <span className={styles.base}></span>
                <span className={styles.text}> Send Message!</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
