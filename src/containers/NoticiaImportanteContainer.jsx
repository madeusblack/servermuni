/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import pdf from '../assets/static/PDF.png';
import resolucion from '../assets/static/noticiaimportante/resolucion.pdf';
import imagen from '../assets/static/noticiaimportante/noticiaimportante.jpeg';

import classes from '../assets/styles/Sae.module.css';
import muni from '../assets/static/noticiaimportante/1.mp4';

const noticiaImportanteContainer = () => (
  <div className={classes.container}>
    <h1 className={classes.saeTitle}>DECLARA Y CALIFICA COMO ZONA REZAGADA EN MATERIA SOCIAL Y APRUEBA PLAN DE DESARROLLO DEL GOBIERNO REGIONAL DE VALPARAISO PARA LA COMUNA DE NOGALES</h1>
    <video controls className={classes.video}>
      <source src={muni} type='video/mp4' poster={imagen} />
    </video>
    <a href={resolucion} className={classes.pdf}>
      Resolución
      <img src={pdf} className={classes.pdfIcon} alt='pdf file' />
    </a>
  </div>
);
export default noticiaImportanteContainer;
