/* eslint-disable indent */
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
import estadoCovid from '../../assets/static/header/estadoCovid4.jpg';
import estadoCovidwebp from '../../assets/static/header/estadoCovid4.webp';
import LinksServicios from './LinksServicios';
import emergencia from '../../assets/static/header/emergencia.png';
import emergenciawebp from '../../assets/static/header/emergencia.webp';
import cuenta2020 from '../../assets/static/header/cuenta2020.jpeg';
import sea from '../../assets/static/header/sea.png';
import seawebp from '../../assets/static/header/sea.webp';
import cuenta2020webp from '../../assets/static/header/cuenta2020.webp';
import cuenta2020pdf from '../../assets/static/header/cuenta2020.pdf';
import ImageLink from './ImageLink/ImageLink';

const Header = () => (
  <div className={styles.headerContainer}>

    <div className={styles.upperHeader}>
      <div className={styles.Left}>
        <Link to='/'>
          <img src={logo} alt='Logo municipalidad de Nogales' />
        </Link>
      </div>
      <div className={styles.lowerRight}>
        <ImageLink
          link={cuenta2020pdf}
          src={cuenta2020}
          srcWebp={cuenta2020webp}
          alt='Cuenta Publica'
        />
        <ImageLink
          link='https://seia.sea.gob.cl/reportes/publico/rpt_proyectos_comunasAction.php?comuna=1058&presentacion=AMBOS&estados%5B%5D=3&sector='
          src={sea}
          srcWebp={seawebp}
          alt='Servicio Evaluación Ambiental'
        />
        <ImageLink link='/ordenanzas' local noImage>
          Ordenanzas Municipales
        </ImageLink>
        <ImageLink
          link='https://www.gob.cl/coronavirus/pasoapaso/'
          src={estadoCovid}
          srcWebp={estadoCovidwebp}
          alt='Estado comuna paso a paso'
        />
        <ImageLink
          link='https://comisariavirtual.cl/'
          src={comisaria}
          srcWebp={comisariawebp}
          alt='comisaria virtual'
        />
        <ImageLink
          link='/emergencias'
          src={emergencia}
          srcWebp={emergenciawebp}
          alt='Telefonos de Emergencia'
          local
        />
        <ImageLink
          link='https://www.leylobby.gob.cl/instituciones/MU183'
          src={lobby}
          srcWebp={lobbywebp}
          alt='Lobby y gestion de intereses particulares'
        />
        <ImageLink
          link='http://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=0078b82e8b3606aa549688114c54effe'
          src={sai}
          srcWebp={saiwebp}
          alt='Solicitar informacion ley de transparencia'
        />
        <ImageLink
          link='http://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=MU183'
          src={tai}
          srcWebp={taiwebp}
          alt='transparencia activa ley de transparencia'
        />
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
  </div>
);
export default Header;
