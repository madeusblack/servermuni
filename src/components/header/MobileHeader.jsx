/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/MobileMenu.module.css';
import logo from '../../assets/static/header/logo.png';
import LinksMenuMovil from './LinksMenuMovil';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // eslint-disable-next-line no-inner-declarations
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const MobileHeader = () => {
  // Usage
  const [count, setCount] = useState(false);

  const size = useWindowSize();
  if (!count) {
    return (
      <div className={size.width < 800 ? styles.HamburgerButton : styles.hidden} onClick={() => setCount(!count)}>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20' rx='8' fill='#40cc1d' />
          <rect y='30' width='100' height='20' rx='8' fill='#40cc1d' />
          <rect y='60' width='100' height='20' rx='8' fill='#40cc1d' />
        </svg>
      </div>
    );
  }

  return (
    <div className={size.width < 800 ? styles.wrapper : styles.hidden}>
      <div className={styles.exit} onClick={() => setCount(!count)}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' role='img'>
          <path
            data-name='layer1'
            fill='#202020'
            d='M51 17.25L46.75 13 32 27.75 17.25 13 13 17.25 27.75 32 13 46.75 17.25 51 32 36.25 46.75 51 51 46.75 36.25 32 51 17.25z'
          />
        </svg>
      </div>
      <img className={styles.logoMuni} src={logo} alt='Logo municipalidad de Nogales' />
      <Link className={styles.mobileMenuLink} to='/'>INICIO</Link>
      <LinksMenuMovil className={styles.mobileMenuLink} tipo='muni' />
      <LinksMenuMovil className={styles.mobileMenuLink} tipo='comuna' />
      <LinksMenuMovil className={styles.mobileMenuLink} tipo='beneficios' />
      <Link className={styles.mobileMenuLink} to='/juzgado'>JUZGADO POLICÍA LOCAL</Link>
      <a className={styles.mobileMenuLink} target='blank_' href='http://www.indap.gob.cl/'>PRODESAL</a>
      <a className={styles.mobileMenuLink} target='blank_' href='http://www.nogaleschile.cl/'>EDUCACIÓN</a>
      <a className={styles.mobileMenuLink} target='blank_' href='http://site.saludnogales.cl/'>SALUD</a>
    </div>
  );

};
export default MobileHeader;
