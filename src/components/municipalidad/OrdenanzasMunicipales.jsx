import React from 'react';
import pdfImg from '../../assets/static/PDF.svg';
import decreto1378 from '../../assets/static/ordenanzas/DECRETO 1378.pdf';
import decreto717 from '../../assets/static/ordenanzas/publicacion diario oficial 12 junio 2021 bramadores y carreras clandestinas.pdf';
import decreto1568 from '../../assets/static/ordenanzas/DECRETO 1568 PROHIBICIÓN DE INGRESO DE VENDEDORES EN DEPENDENCIAS MUNICIPALES.pdf';
import decreto1550 from '../../assets/static/ordenanzas/APRUEBA AGREGAR ART.5º TER A ORDENANZA DERECHOS MUNICIPALES.pdf';
import decreto2496 from '../../assets/static/ordenanzas/DECRETO ALCALDICIO 2496 DEROGACION ARTICULO ORDENANZA ANIMALES.pdf';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';

const OrdenanzasMunicipales = () => (
  <div className={styles.muniContainer}>
    <h1 className={styles.muniTitle}>Ordenanzas Municipales</h1>
    <div className={styles.ordenanzasContainer}>
      <a name='decreto1378' href={decreto2496}>
        <img src={pdfImg} alt='' />
        DECRETO ALCALDICIO 2496 DEROGACION ARTICULO ORDENANZA ANIMALES
      </a>
      <a name='decreto1378' href={decreto717}>
        <img src={pdfImg} alt='' />
        ORDENANZA MUNICIPAL SOBRE CARRERAS CLANDESTINAS Y RUIDOS MOLESTOS POR BRAMADORES O ESCAPES LIBRE DE VEHÍCULOS.
      </a>
      <a name='decreto1378' href={decreto1550}>
        <img src={pdfImg} alt='' />
        APRUEBA AGREGAR ARTICULO 5º TER A ORDENANZA DE DERECHOS MUNICIPALES DECRETO 1550.
      </a>
      <a name='decreto1378' href={decreto1568}>
        <img src={pdfImg} alt='' />
        DECRETO 1568/2021 PROHIBICIÓN DE INGRESO DE VENDEDORES A DEPENDENCIAS MUNICIPALES DURANTE JORNADA DE TRABAJO
      </a>
      <a name='decreto1378' href={decreto1378}>
        <img src={pdfImg} alt='' />
        Decreto 1378/2021 revoca acuerdo de concejo Nº37, de 3 de marzo de 2021.
      </a>
    </div>
  </div>
);
export default OrdenanzasMunicipales;
