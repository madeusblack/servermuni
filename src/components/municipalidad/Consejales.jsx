import React from 'react';
import '../../assets/styles/Consejales.scss';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import cOrtega from '../../assets/static/consejales/CARLOS ORTEGA VALENCIA.jpg';
import cAlvarado from '../../assets/static/consejales/CLAUDIO ALVARADO LEIVA.jpg';
import cTapia from '../../assets/static/consejales/CLAUDIO TAPIA MENDOZA.jpg';
import Jmarchant from '../../assets/static/consejales/JOHAO MARCHANT VALENZUELA .jpg';
import lPacheco from '../../assets/static/consejales/LESLIE PACHECO RAMIREZ.jpg';
import mBahamondes from '../../assets/static/consejales/MARIA FRANCISCA BAHAMONDES.jpg';

const Consejales = () => {
  return (
    <div className={styles.ConsejalesContainer}>
      <h1 className={styles.muniTitle}>CONCEJALES</h1>
      <div className={styles.grupoConsejales}>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={cOrtega} alt='' />
          <p>CARLOS ORTEGA VALENCIA</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={cAlvarado} alt='' />
          <p>CLAUDIO ALVARADO LEIVA</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Jmarchant} alt='' />
          <p>JOHAO MARCHANT VALENZUELA</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={cTapia} alt='' />
          <p>CLAUDIO TAPIA MENDOZA</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={lPacheco} alt='' />
          <p>LESLIE PACHECO RAMIREZ</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={mBahamondes} alt='' />
          <p>MARIA FRANCISCA BAHAMONDES</p>
        </div>
      </div>

    </div>
  );
};
export default Consejales;
