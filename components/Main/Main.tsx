'use client';
import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import styles from './Main.module.css';
import RubberBand from '../RubberBand/RubberBand';

const Main: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fe8ff,
          backgroundColor: 0x0b2535,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className={styles.main} ref={vantaRef}>
        <div className={styles.container_main}>
          <RubberBand text='Hi,' type='heading' />
          <RubberBand text="I'm Shivanshu," type='heading' />
          <RubberBand text='web developer.' type='heading' />
          <a href='#contact' className={styles.contact_button}>
            <div>
              <span className={styles.bg}></span>
              <span className={styles.base}></span>
              <span className={styles.text}> Contact ME!</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
