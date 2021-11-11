import React from 'react';
import '../../../assets/styles/Carrousel.scss';
import 'react-awesome-slider/dist/styles.css';

const CarrouselElement = (props) => {
  const { imageWebp, link, image, alt } = props;
  console.log('test');
  console.log(imageWebp, link, image, alt);
  if (!imageWebp && !link) {
    return (
      <div className='carouselImage'>
        <image src={image} alt={alt} />
      </div>
    );
  }
  if (imageWebp && link) {
    return (
      <div className='carouselImage'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <picture>
            <source srcSet={imageWebp} type='image/webp' />
            <source srcSet={image} type='image/jpeg' />
            <image csr={image} alt={alt} />
          </picture>
        </a>
      </div>
    );
  }
  if (imageWebp && !link) {
    <div className='carouselImage'>
      <picture>
        <source srcSet={imageWebp} type='image/webp' />
        <source srcSet={image} type='image/jpeg' />
        <image csr={image} alt={alt} />
      </picture>
    </div>;
  }
  if (link && !imageWebp) {
    return (
      <div className='carouselImage'>
        <a href={link}>
          <image src={image} alt={alt} />
        </a>
      </div>
    );
  }
};

export default CarrouselElement;

