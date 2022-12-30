'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../images/shivanshu-icon.png';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'nav-scrolled' : ''}>
      <a href='#'>
        <Image src={logo} className={styles.logo} alt='logo' height={72} />
      </a>
      <input type='checkbox' id='nav-toggle' className={styles.nav_toggle} />
      <nav>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#myskills'>My Skills</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact ME</a>
          </li>
        </ul>
      </nav>
      <label htmlFor='nav-toggle' className={styles.nav_toggle_label}>
        <span></span>
      </label>
    </header>
  );
};

export default Header;
