import RubberBand from '../RubberBand/RubberBand';
import TagCanvas from '../TagCanvas/TagCanvas';
import styles from './About.module.css';

const About = () => {
  return (
    <section id='about'>
      <div className={styles.container_about}>
        <div className={styles.about_section}>
          <RubberBand text='Me, Myself & I' type='subheading' />
          <p className={styles.about_me}>
            I&apos;m a Full Stack Web Developer with a passion for creating
            beautiful, responsive and functional websites. I&apos;m currently
            working on a few personal projects and learning new technologies
            like Astro, Prisma and tRPC.
          </p>
          <p className={styles.about_me}>
            Currently I&apos;m pursuing my Bachelors in Infomartion Technology
            from Indian Institute of Information Technology, Vadodara.
          </p>
          <p className={styles.about_me}>
            I&apos;m always looking for opportunities to learn new technologies
            and improve my skills. I&apos;m currently learning TypeScript,
            Prisma, tRPC.
          </p>
        </div>
        <div className={styles.about_sphere}>
          <TagCanvas />
        </div>
      </div>
    </section>
  );
};

export default About;
