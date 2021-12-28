import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/Carrousel.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import { Link } from 'react-router-dom';
import quinta from '../../assets/static/carousel/119.png';
import juzgado from '../../assets/static/carousel/juzgado.jpg';
import septima from '../../assets/static/carousel/121.png';
import pdfMuni from '../../assets/static/pdf/carousel/covidmunicipal.pdf';
import cuenta2020 from '../../assets/static/header/cuentabanner.jpeg';
import cuenta2020webp from '../../assets/static/header/cuentabanner.webp';
import cuenta2020pdf from '../../assets/static/header/cuenta2020.pdf';
import omc from '../../assets/static/carousel/omc.jpg';
import omcwebp from '../../assets/static/carousel/omc.webp';
import basura from '../../assets/static/carousel/basura.jpeg';
import emergencias from '../../assets/static/carousel/emergencia.jpg';
import censo from '../../assets/static/carousel/censo.jpg';
import censowebp from '../../assets/static/carousel/censo.webp';
import juzgadoDocumento from '../../assets/static/carousel/jpl.pdf';
import basuraNoche from '../../assets/static/carousel/basuranoche.jpg';
import navidad from '../../assets/static/carousel/navidad.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carrousel = () => (
  <AutoplaySlider
    className='carousell'
    play={true}
    cancelOnInteraction={true}
    interval={3000}
  >
    <div className='carouselImage'>
      <img src={navidad} alt='' />
    </div>
    <div className='carouselImage'>
      <img src={basuraNoche} alt='' />
    </div>
    <div className='carouselImage'>
      <a href={juzgadoDocumento} target='_blank' rel='noopener noreferrer'>
        <img src={juzgado} alt='' />
      </a>
    </div>
    <div className='carouselImage'>
      <a href='https://www.ine.cl/participacionintercultural' target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={censowebp} type='image/webp' />
          <source srcSet={censo} type='image/jpeg' />
          <img csr={censo} alt='' />
        </picture>
      </a>
    </div>
    <div className='carouselImage'>
      <img src={basura} alt='' />
    </div>
    <div className='carouselImage'>
      <img src={emergencias} alt='' />
    </div>
    <div className='carouselImage'>
      <picture>
        <source srcSet={omcwebp} type='image/webp' />
        <source srcSet={omc} type='image/jpeg' />
        <img csr={omc} alt='' />
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
      <Link to='/saludCarousel'>
        <img src={quinta} alt='' />
      </Link>
    </div>
    <div className='carouselImage'>
      <a href={pdfMuni}>
        <img src={septima} alt='' />
      </a>
    </div>
  </AutoplaySlider>
);
export default Carrousel;
