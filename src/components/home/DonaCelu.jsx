import React from 'react';
import styles from '../../assets/styles/CovidVacunacion.module.css';
import donacelu from '../../assets/static/Covid/donacelu.jpg';
import donaceluwebp from '../../assets/static/Covid/donacelu.webp';

const Donacelu = () => (
  <div className={styles.container}>
    <h5 className={styles.title}>Clases serán online debido al ingreso de la comuna a cuarentena</h5>
    <picture>
      <source srcSet={donaceluwebp} type='image/webp' />
      <source srcSet={donacelu} type='image/jpeg' />
      <img className={styles.image} csr={donacelu} alt='' />
    </picture>
  </div>
);
export default Donacelu;
