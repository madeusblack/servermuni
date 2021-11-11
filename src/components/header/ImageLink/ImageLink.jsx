import { Link } from 'react-router-dom';
import React from 'react';
import styles from './ImageLink.module.css';

const ImageLink = (props) => {
  const { local, link, src, srcWebp, alt, noImage, children } = props;
  if (local && noImage) {
    return (
      <Link to={link} className={styles.botonOrdenanzas}>
        {children}
      </Link>
    );
  }
  if (local) {
    return (
      <Link to={src}>
        <picture>
          <source srcSet={srcWebp} type='image/webp' />
          <source srcSet={src} type='image/png' />
          <img className={styles.headerLink} csr={src} alt={alt} />
        </picture>
      </Link>
    );
  } return (
    <a target='_blank' rel='noopener noreferrer' href={link}>
      <picture>
        <source srcSet={srcWebp} type='image/webp' />
        <source srcSet={src} type='image/png' />
        <img className={styles.headerLink} csr={src} alt={alt} />
      </picture>
    </a>
  );
};
export default ImageLink;
