import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Header.module.css';
import logo from '../../assets/static/header/logo.png';
import instagram from '../../assets/static/header/instagram.svg';
import mail from '../../assets/static/header/mail.svg';
import twitter from '../../assets/static/header/twitter.svg';
import youtube from '../../assets/static/header/youtube.svg';
import lobby from '../../assets/static/header/lobby.png';
import lobbywebp from '../../assets/static/header/lobby.webp';
import sai from '../../assets/static/header/sai.png';
import saiwebp from '../../assets/static/header/sai.webp';
import tai from '../../assets/static/header/tai.png';
import taiwebp from '../../assets/static/header/tai.webp';
import comisaria from '../../assets/static/header/comisaria.jpg';
import comisariawebp from '../../assets/static/header/comisaria.webp';
import estadoCovid from '../../assets/static/header/estadoCovid1.jpeg';
import estadoCovidwebp from '../../assets/static/header/estadoCovid1.webp';
import LinksServicios from './LinksServicios';
import emergencia from '../../assets/static/header/emergencia.png';
import emergenciawebp from '../../assets/static/header/emergencia.webp';
import circulacionwebp from '../../assets/static/header/circulacion.webp';
import circulacion from '../../assets/static/header/circulacion.jpg';

const Header = () => (
  <div className={styles.headerContainer}>

    <div className={styles.upperHeader}>
      <div className={styles.Left}>
        <Link to='/'>
          <img src={logo} alt='Logo munnicipalidad de Nogales' />
        </Link>
      </div>
      <div className={styles.lowerRight}>
        <Link to='/pasoapaso'>
          <picture>
            <source srcSet={estadoCovidwebp} type='image/webp' />
            <source srcSet={estadoCovid} type='image/jpeg' />
            <img className={styles.headerLink} csr={estadoCovid} alt='Estado comuna paso a paso' />
          </picture>
        </Link>
        <a target='_blank' rel='noopener noreferrer' href='https://comisariavirtual.cl/'>
          <picture>
            <source srcSet={comisariawebp} type='image/webp' />
            <source srcSet={comisaria} type='image/jpeg' />
            <img className={styles.headerLink} csr={comisaria} alt='comisaria virtual' />
          </picture>
        </a>
        <Link to='/emergencias'>
          <picture>
            <source srcSet={emergenciawebp} type='image/webp' />
            <source srcSet={emergencia} type='image/png' />
            <img className={styles.headerLink} csr={emergencia} alt='Estado comuna paso a paso' />
          </picture>
        </Link>
        <a target='_blank' rel='noopener noreferrer' href='https://www.leylobby.gob.cl/instituciones/MU183'>
          <picture>
            <source srcSet={lobbywebp} type='image/webp' />
            <source srcSet={lobby} type='image/png' />
            <img className={styles.headerLink} csr={lobby} alt='Lobby y gestion de intereses particulares' />
          </picture>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='http://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=0078b82e8b3606aa549688114c54effe'>
          <picture>
            <source srcSet={saiwebp} type='image/webp' />
            <source srcSet={sai} type='image/png' />
            <img className={styles.headerLink} csr={sai} alt='Solicitar informacion ley de transparencia' />
          </picture>
        </a>

        <a target='_blank' rel='noopener noreferrer' href='http://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=MU183'>
          <picture>
            <source srcSet={taiwebp} type='image/webp' />
            <source srcSet={tai} type='image/png' />
            <img className={styles.headerLink} csr={tai} alt='transparencia activa ley de transparencia' />
          </picture>
        </a>

      </div>
    </div>

    <div className={styles.upperRight}>
      <p>Siguenos en:</p>
      <a target='_blank' rel='noopener noreferrer' className={styles.icon} href='https://www.youtube.com/channel/UCpURFVn_rEYNePMMhw_-fWw'>
        <picture>
          <source srcSet={youtube} type='image/png' />
          <img csr={youtube} alt='canal youtube' />
        </picture>
      </a>
      <a target='_blank' rel='noopener noreferrer' className={styles.icon} href='https://twitter.com/muninogales'>
        <picture>
          <source srcSet={twitter} type='image/png' />
          <img csr={twitter} alt='Twitter' />
        </picture>
      </a>
      <a target='_blank' rel='noopener noreferrer' className={styles.icon} href='https://www.instagram.com/muninogales5/'>
        <picture>
          <source srcSet={instagram} type='image/png' />
          <img csr={instagram} alt='Instagram' />
        </picture>
      </a>
      <a target='_blank' rel='noopener noreferrer' className={styles.icon} href='http://mail.google.com/a/muninogales.cl'>
        <picture>
          <source srcSet={mail} type='image/png' />
          <img csr={mail} alt='Inicio de sesion de correo de Funcionarios' />
        </picture>
      </a>
    </div>

    <div className={styles.lowerHeader}>
      <div className={styles.lowerHeaderLeft}>
        <Link to='/'>INICIO</Link>
        <LinksServicios tipo='muni' className={styles.mobileMenuLink} />
        <LinksServicios tipo='comuna' />
        <LinksServicios tipo='beneficios' />
      </div>
      <div className={styles.lowerHeadeRight}>
        <Link to='/juzgado'>JUZGADO POLICÍA LOCAL</Link>
        <a target='_blank' rel='noopener noreferrer' href='http://www.indap.gob.cl/'>PRODESAL</a>
        <a target='_blank' rel='noopener noreferrer' href='http://www.nogaleschile.cl/'>EDUCACIÓN</a>
        <a target='_blank' rel='noopener noreferrer' href='http://site.saludnogales.cl/'>SALUD</a>
      </div>
    </div>
    <a className={styles.bannerCirculacion} aria-label='Pago permisos de circulacion' rel='noopener noreferrer' href='http://200.54.77.226/permisos_maestro.html'>
      <picture>
        <source srcSet={circulacionwebp} type='image/webp' />
        <source srcSet={circulacion} type='image/jpg' />
        <img className={styles.headerCirculacion} csr={circulacion} alt='Estado comuna paso a paso' />
      </picture>
    </a>
  </div>
);
export default Header;
