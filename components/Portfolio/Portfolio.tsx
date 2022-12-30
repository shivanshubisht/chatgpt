import styles from './Portfolio.module.css';
import image1 from '../../images/e-commerce-with-nextjs.jpg';
import image2 from '../../images/url-shortner.png';
import image3 from '../../images/netflix.jpg';
import image4 from '../../images/chatgpt.webp';
import Image from 'next/image';
import Link from 'next/link';
import RubberBand from '../RubberBand/RubberBand';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className={styles.container_portfolio}>
        <RubberBand text='Portfolio' type='subheading' />
        <div className={styles.tile_grid}>
          <Link className={styles.tile} href='https://ecommerce.shivanshu.in/'>
            <Image
              className={styles.tile__background}
              src={image1}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt='e-commerce-with-nextjs'
            />
            <div className={styles.tile__content}>
              <p className={styles.tile__category}>Project</p>
              <h3 className={styles.tile__heading}>E-commerce with NextJS</h3>
            </div>
          </Link>
          <Link
            className={styles.tile}
            href='https://url-shortner.shivanshu.in/'
          >
            <Image
              className={styles.tile__background}
              src={image2}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt='personal-website'
            />
            <div className={styles.tile__content}>
              <p className={styles.tile__category}>Project</p>
              <h3 className={styles.tile__heading}>URL Shortner</h3>
            </div>
          </Link>
          <Link className={styles.tile} href='https://video.shivanshu.in/'>
            <Image
              className={styles.tile__background}
              src={image3}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt='netflix-clone'
            />
            <div className={styles.tile__content}>
              <p className={styles.tile__category}>Project</p>
              <h3 className={styles.tile__heading}>Netflix Clone</h3>
            </div>
          </Link>
          <Link className={styles.tile} href='https://chatgpt.shivanshu.in/'>
            <Image
              className={styles.tile__background}
              src={image4}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt='rotating-canvas'
            />
            <div className={styles.tile__content}>
              <p className={styles.tile__category}>Project</p>
              <h3 className={styles.tile__heading}>
                ChatGPT using OpenAI&apos;s text-davinci003
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
