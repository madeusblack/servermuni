import React from 'react';
import styles from '../../assets/styles/CovidVacunacion.module.css';
import covid from '../../assets/static/Covid/covid.png';
import covidwebp from '../../assets/static/Covid/covid.webp';
import covidastrawebp from '../../assets/static/Covid/covidastra.webp';
import covidastra from '../../assets/static/Covid/covidastra.png';

const CovidVacunacion = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>Calendario Vacunación Covid-19</h3>
    <picture>
      <source srcSet={covidwebp} type='image/webp' />
      <source srcSet={covid} type='image/jpeg' />
      <img className={styles.image} csr={covid} alt='' />
    </picture>
    <picture>
      <source srcSet={covidastrawebp} type='image/webp' />
      <source srcSet={covidastra} type='image/jpeg' />
      <img className={styles.image} csr={covidastra} alt='' />
    </picture>
  </div>
);
export default CovidVacunacion;
