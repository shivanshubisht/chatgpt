'use client';
import { useEffect } from 'react';
import RubberBand from '../RubberBand/RubberBand';
import styles from './Skills.module.css';

const MySkills = () => {
  useEffect(() => {
    const divs = document.querySelectorAll('.skills_chart');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('details');
          } else {
            entry.target.classList.remove('details');
          }
        });
      },
      { threshold: 0.5 }
    );

    divs.forEach((div) => {
      observer.observe(div);
    });
  }, []);

  return (
    <section id='myskills'>
      <div className={styles.container_myskills}>
        <div className='skills_chart'>
          <div className='card'>
            <div className='photo'></div>
            <p></p>
            <div className='chart'>
              <div className='bar bar1'>
                <span>CSS3</span>
              </div>
              <div className='bar bar2'>
                <span>JS</span>
              </div>
              <div className='bar bar3'>
                <span>React</span>
              </div>
              <div className='bar bar4'>
                <span>HTML5</span>
              </div>
              <div className='bar bar5'>
                <span>Astro</span>
              </div>
              <div className='bar bar6'>
                <span>NextJS</span>
              </div>
              <div className='bar bar7'>
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myskills_section}>
          <RubberBand text='My Skills' type='subheading' />
          <p className={styles.myskills}>
            My expertise is in the front-end development of web applications. I
            specialize in React, NextJS, and TailwindCSS. I have experience with
            other frameworks and libraries such as Bootstrap, Material UI, and
            Styled-Components.
          </p>
          <p className={styles.myskills}>
            I have worked with various technologies like React, Next.js,
            TailwindCSS and have previous experience with WordPress and PHP.
          </p>
          <p className={styles.myskills}>
            I&apos;m also a big fan of JAMStack, and I&apos;m always looking for
            opportunities to learn more about it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
