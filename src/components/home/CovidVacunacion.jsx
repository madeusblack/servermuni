import React from 'react';
import styles from '../../assets/styles/CovidVacunacion.module.css';
import covid from '../../assets/static/Covid/covid.jpeg';
import covidwebp from '../../assets/static/Covid/covid.webp';

const CovidVacunacion = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>Calendario Vacunación Covid-19</h3>
    <picture>
      <source srcSet={covidwebp} type='image/webp' />
      <source srcSet={covid} type='image/jpeg' />
      <img className={styles.image} csr={covid} alt='' />
    </picture>
  </div>
);
export default CovidVacunacion;
