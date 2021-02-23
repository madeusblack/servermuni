/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import sello from '../assets/static/links/sello.png';
import classes from '../assets/styles/Sae.module.css';

const Sae = () => (
  <div className={classes.saecontainer}>
    <h1 className={classes.saeTitle}>Comprueba si el Sistema de Alerta SAE está activado en tu celular</h1>
    <p className={classes.saeParraph}>
      El Sistema de Alerta de Emergencias (SAE) se creó para informar a los ciudadanos de posibles riesgos ante desastres naturales como terremotos, tsunamis o incendios.
      Se trata de un mensaje, con particular sonido y vibración, que se envía a los celulares que se encuentren en la geolocalización de la emergencia, indicando las instrucciones recomendadas por la ONEMI.
      Si no estás seguro o quieres comprobar que tu celular cuenta con este sistema activado, debes fijarte en el sello <a href='https://comparaiso.cl/tramites/sae'>Multibanda SAE</a> que indica que el equipo es compatible.
    </p>
    <img className={classes.saeImg} src={sello} alt='sello multibanda sae' />
    <p className={classes.saeParraph}>
      Otra opción es ingresar tu IMEI en la <a href='https://multibanda.cl/consulta-tu-imei/'>plataforma habilitada por Subtel</a> y comprobar que tu equipo tenga habilitado este sistema que no tiene costo para los usuarios.
    </p>
  </div>
);
export default Sae;
