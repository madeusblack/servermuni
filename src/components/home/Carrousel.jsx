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
import novena from '../../assets/static/carousel/123.jpg';
import novenawebp from '../../assets/static/carousel/123.webp';
import decimoprimera from '../../assets/static/carousel/1.jpg';
import decimoprimerawebp from '../../assets/static/carousel/1.webp';
import juzgado from '../../assets/static/pdf/carousel/jpl.pdf';
import pdfMuni from '../../assets/static/pdf/carousel/covidmunicipal.pdf';
import calendariobasura from '../../assets/static/pdf/carousel/basura.jpg';
import cuenta2019 from '../../assets/static/pdf/cuenta publica/cp19.pdf';
import veterinaria from '../../assets/static/carousel/veterinaria.jpg';
import veterinariawebp from '../../assets/static/carousel/veterinaria.webp';
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
import aviso from '../../assets/static/carousel/aviso.png';
import avisowebp from '../../assets/static/carousel/aviso.webp';
import avisoAseo from '../../assets/static/carousel/avisoAseo.svg';
import becadetalle from '../../assets/static/carousel/becadetalle.jpg';
import beca2021 from '../../assets/static/carousel/beca2021.jpg';
import beca2021webp from '../../assets/static/carousel/beca2021.webp';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carrousel = () => (
  <AutoplaySlider
    className='carrousell'
    play={true}
    cancelOnInteraction={true}
    interval={9000}
  >
    <div>
      <a href={becadetalle} target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={beca2021webp} type='image/webp' />
          <source srcSet={beca2021} type='image/jpeg' />
          <img className='image' csr={beca2021} alt='' />
        </picture>
      </a>
    </div>
    <div className='imagecontainer'>
      <img className='imagesvg' src={avisoAseo} alt='' />
    </div>
    <div>
      <picture>
        <source srcSet={avisowebp} type='image/webp' />
        <source srcSet={aviso} type='image/jpeg' />
        <img className='image' csr={aviso} alt='' />
      </picture>
    </div>
    <div>
      <a href={censovideo} target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={censoemergenciawebp} type='image/webp' />
          <source srcSet={censoemergencia} type='image/jpeg' />
          <img className='image' csr={censoemergencia} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <picture>
        <source srcSet={atletismowebp} type='image/webp' />
        <source srcSet={atletismo} type='image/jpeg' />
        <img className='image' csr={atletismo} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={ciclismowebp} type='image/webp' />
        <source srcSet={ciclismo} type='image/jpeg' />
        <img className='image' csr={ciclismo} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={boxeowebp} type='image/webp' />
        <source srcSet={boxeo} type='image/jpeg' />
        <img className='image' csr={boxeo} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={zumbawebp} type='image/webp' />
        <source srcSet={zumba} type='image/jpeg' />
        <img className='image' csr={zumba} alt='' />
      </picture>
    </div>

    <div>
      <picture>
        <source srcSet={veterinariawebp} type='image/webp' />
        <source srcSet={veterinaria} type='image/jpeg' />
        <img className='image' csr={veterinaria} alt='' />
      </picture>
    </div>
    <div>
      <Link to='/saludCarousel'>
        <img className='image' src={quinta} alt='' />
      </Link>
    </div>
    <div>
      <a href={juzgado}>
        <picture>
          <source srcSet={sextawebp} type='image/webp' />
          <source srcSet={sexta} type='image/jpeg' />
          <img className='image' csr={sexta} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href={pdfMuni}>
        <img className='image' src={septima} alt='' />
      </a>
    </div>
    <div>
      <a href={calendariobasura}>
        <picture>
          <source srcSet={octavawebp} type='image/webp' />
          <source srcSet={octava} type='image/jpeg' />
          <img className='image' csr={octava} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href={cuenta2019}>
        <picture>
          <source srcSet={novenawebp} type='image/webp' />
          <source srcSet={novena} type='image/jpeg' />
          <img className='image' csr={novena} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href='tel:+56988698591'>
        <picture>
          <source srcSet={phonewebp} type='image/webp' />
          <source srcSet={phone} type='image/jpeg' />
          <img className='image' csr={phone} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href='tel:+56332280339'>
        <picture>
          <source srcSet={decimoprimerawebp} type='image/webp' />
          <source srcSet={decimoprimera} type='image/jpeg' />
          <img className='image' csr={decimoprimera} alt='' />
        </picture>
      </a>
    </div>
  </AutoplaySlider>
);
export default Carrousel;
