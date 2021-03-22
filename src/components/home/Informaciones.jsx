import React from 'react';
import '../../assets/styles/Highlighted.scss';
import residuos from '../../assets/static/informaciones/residuos.jpg';
import residuoswebp from '../../assets/static/informaciones/residuos.webp';
import styles from '../../assets/styles/CovidVacunacion.module.css';
import donacelu from '../../assets/static/Covid/donacelu.jpg';
import donaceluwebp from '../../assets/static/Covid/donacelu.webp';

const Informaciones = () => (
  <div className='informacionesContainer'>
    <h3 className='highlightedTitle'>Informaciones</h3>
    <picture>
      <source srcSet={donaceluwebp} type='image/webp' />
      <source srcSet={donacelu} type='image/jpeg' />
      <img className={styles.image} csr={donacelu} alt='' />
    </picture>
    <picture>
      <source srcSet={residuoswebp} type='image/webp' />
      <source srcSet={residuos} type='image/jpeg' />
      <img className='highlightedImage' loading='lazy' csr={residuos} alt='' />
    </picture>
  </div>
);
export default Informaciones;
