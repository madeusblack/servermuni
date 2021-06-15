import React from 'react';
import styles from '../../assets/styles/CovidVacunacion.module.css';
import clasesOnline from '../../assets/static/Covid/remate.jpg';
import clasesOnlinewebp from '../../assets/static/Covid/remate.webp';
import ordenanzapdf from '../../assets/static/pdf/ordenanza.pdf';
import ordenanza from '../../assets/static/header/ordenanza.png';
import ordenanzawebp from '../../assets/static/header/ordenanza.webp';

const ClasesOnline = () => (
  <div className={styles.container}>
    <h5 className={styles.title}>Remate</h5>
    <picture>
      <source srcSet={clasesOnlinewebp} type='image/webp' />
      <source srcSet={clasesOnline} type='image/jpeg' />
      <img className={styles.image} csr={clasesOnline} alt='' />
    </picture>

    <h5 className={styles.titleWide1}>ORDENANZA MUNICIPAL SOBRE CARRERAS CLANDESTINAS Y RUIDOS MOLESTOS POR BRAMADORES O ESCAPES LIBRE DE VEHÍCULOS</h5>
    <a href={ordenanzapdf}>
      <picture>
        <source srcSet={ordenanzawebp} type='image/webp' />
        <source srcSet={ordenanza} type='image/png' />
        <img className={styles.image} csr={ordenanza} alt='' />
      </picture>
    </a>
  </div>

);
export default ClasesOnline;
