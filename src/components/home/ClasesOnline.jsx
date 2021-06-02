import React from 'react';
import styles from '../../assets/styles/CovidVacunacion.module.css';
import clasesOnline from '../../assets/static/Covid/remate.jpg';
import clasesOnlinewebp from '../../assets/static/Covid/remate.webp';

const ClasesOnline = () => (
  <div className={styles.container}>
    <h5 className={styles.title}>Remate</h5>
    <picture>
      <source srcSet={clasesOnlinewebp} type='image/webp' />
      <source srcSet={clasesOnline} type='image/jpeg' />
      <img className={styles.image} csr={clasesOnline} alt='' />
    </picture>
  </div>
);
export default ClasesOnline;
