import React from 'react';
import '../../assets/styles/Carrousel.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import phone from '../../assets/static/carousel/49.jpg';
import phonewebp from '../../assets/static/carousel/49.webp';
import quinta from '../../assets/static/carousel/119.png';
import sexta from '../../assets/static/carousel/120.jpg';
import sextawebp from '../../assets/static/carousel/120.webp';
import septima from '../../assets/static/carousel/121.png';
import octava from '../../assets/static/carousel/122.jpg';
import octavawebp from '../../assets/static/carousel/122.webp';
import decimoprimera from '../../assets/static/carousel/1.jpg';
import decimoprimerawebp from '../../assets/static/carousel/1.webp';
import juzgado from '../../assets/static/pdf/carousel/jpl.pdf';
import pdfMuni from '../../assets/static/pdf/carousel/covidmunicipal.pdf';
import calendariobasura from '../../assets/static/pdf/carousel/basura.jpg';
import atletismo from '../../assets/static/carousel/atletismo.jpg';
import atletismowebp from '../../assets/static/carousel/atletismo.webp';
import boxeo from '../../assets/static/carousel/boxeo.jpg';
import boxeowebp from '../../assets/static/carousel/boxeo.webp';
import ciclismo from '../../assets/static/carousel/ciclismo.jpg';
import ciclismowebp from '../../assets/static/carousel/ciclismo.webp';
import zumba from '../../assets/static/carousel/zumba.jpg';
import zumbawebp from '../../assets/static/carousel/zumba.webp';
import censoemergenciawebp from '../../assets/static/carousel/censoemergencia.webp';
import censoemergencia from '../../assets/static/carousel/censoemergencia.jpg';
import censovideo from '../../assets/static/carousel/censo.mp4';
import cuenta2020 from '../../assets/static/header/cuentabanner.jpeg';
import cuenta2020webp from '../../assets/static/header/cuentabanner.webp';
import cuenta2020pdf from '../../assets/static/header/cuenta2020.pdf';
import influenza from '../../assets/static/Covid/influenza.png';
import influenzawebp from '../../assets/static/Covid/influenza.webp';
import bonoInvierno from '../../assets/static/carousel/bonoInvierno.jpg';
import bonoInviernowebp from '../../assets/static/carousel/bonoInvierno.webp';
import omc from '../../assets/static/carousel/omc.jpg';
import omcwebp from '../../assets/static/carousel/omc.webp';
import feria from '../../assets/static/carousel/feria.jpg';
import feriawebp from '../../assets/static/carousel/feria.webp';
import cachureos1 from '../../assets/static/carousel/cachureos1.jpg';
import cachureos1webp from '../../assets/static/carousel/cachureos1.webp';
import cachureos2 from '../../assets/static/carousel/cachureos2.jpg';
import cachureos2webp from '../../assets/static/carousel/cachureos2.webp';
import juramento from '../../assets/static/carousel/juramento.jpg';
import juramentowebp from '../../assets/static/carousel/juramento.webp';
import fasedos from '../../assets/static/carousel/fasedosnogales .jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carrousel = () => (
  <AutoplaySlider
    className='carousell'
    play={true}
    cancelOnInteraction={true}
    interval={9000}
  >
    <div className='carouselImage'>
      <picture>
        <img src={fasedos} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <a href='https://www.facebook.com/muni.nogales.7' target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={juramentowebp} type='image/webp' />
          <source srcSet={juramento} type='image/jpeg' />
          <img csr={juramento} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={cachureos1webp} type='image/webp' />
        <source srcSet={cachureos1} type='image/jpeg' />
        <img csr={cachureos1} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={cachureos2webp} type='image/webp' />
        <source srcSet={cachureos2} type='image/jpeg' />
        <img csr={cachureos2} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <a href='https://www.sercotec.cl/ferias-libres/' target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={feriawebp} type='image/webp' />
          <source srcSet={feria} type='image/jpeg' />
          <img csr={feria} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={omcwebp} type='image/webp' />
        <source srcSet={omc} type='image/jpeg' />
        <img csr={omc} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={bonoInviernowebp} type='image/webp' />
        <source srcSet={bonoInvierno} type='image/jpeg' />
        <img csr={bonoInvierno} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={influenzawebp} type='image/webp' />
        <source srcSet={influenza} type='image/pn g' />
        <img csr={influenza} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <a href={cuenta2020pdf} target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={cuenta2020webp} type='image/webp' />
          <source srcSet={cuenta2020} type='image/jpeg' />
          <img csr={cuenta2020} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <a href={censovideo} target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={censoemergenciawebp} type='image/webp' />
          <source srcSet={censoemergencia} type='image/jpeg' />
          <img csr={censoemergencia} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={atletismowebp} type='image/webp' />
        <source srcSet={atletismo} type='image/jpeg' />
        <img csr={atletismo} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={ciclismowebp} type='image/webp' />
        <source srcSet={ciclismo} type='image/jpeg' />
        <img csr={ciclismo} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={boxeowebp} type='image/webp' />
        <source srcSet={boxeo} type='image/jpeg' />
        <img csr={boxeo} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={zumbawebp} type='image/webp' />
        <source srcSet={zumba} type='image/jpeg' />
        <img csr={zumba} alt='' />
      </picture>
    </div>
    <div className='carouselImage'>
      <Link to='/saludCarousel'>
        <img src={quinta} alt='' />
      </Link>
    </div>
    <div className='carouselImage'>
      <a href={juzgado}>
        <picture>
          <source srcSet={sextawebp} type='image/webp' />
          <source srcSet={sexta} type='image/jpeg' />
          <img csr={sexta} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <a href={pdfMuni}>
        <img src={septima} alt='' />
      </a>
    </div>
    <div className='carouselImage'>
      <a href={calendariobasura}>
        <picture>
          <source srcSet={octavawebp} type='image/webp' />
          <source srcSet={octava} type='image/jpeg' />
          <img csr={octava} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <a href='tel:+56988698591'>
        <picture>
          <source srcSet={phonewebp} type='image/webp' />
          <source srcSet={phone} type='image/jpeg' />
          <img csr={phone} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <a href='tel:+56332280339'>
        <picture>
          <source srcSet={decimoprimerawebp} type='image/webp' />
          <source srcSet={decimoprimera} type='image/jpeg' />
          <img csr={decimoprimera} alt='' />
        </picture>
      </a>
    </div>
  </AutoplaySlider>
);
export default Carrousel;
