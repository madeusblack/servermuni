import React from 'react';
import '../../assets/styles/Highlighted.scss';
import { Link } from 'react-router-dom';
import logomuni from '../../assets/static/header/logo.png';
import noticiaimportante from '../../assets/static/noticiaimportante/noticiaimportante.jpeg';

const NoticiaImportante = () => (
  <div className='NoticiaImportante'>
    <Link to='/entregadocumentos' className='containerActa'>
      <h4>ACTA ENTREGA PERIODO ALCALDICIO 2016-2020</h4>
      <img className='munilogo' src={logomuni} alt='' />
    </Link>
    <Link to='/noticiaimportante'>
      <h4>DECLARA Y CALIFICA COMO ZONA REZAGADA EN MATERIA SOCIAL Y APRUEBA PLAN DE DESARROLLO DEL GOBIERNO REGIONAL DE VALPARAISO PARA LA COMUNA DE NOGALES </h4>
      <img className='noticiaImportanteImagen' src={noticiaimportante} alt='' />
    </Link>
  </div>
);
export default NoticiaImportante;
