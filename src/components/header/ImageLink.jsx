/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';

const ImageLink = ({ local, link, src, srcWebp, alt }) => {
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
