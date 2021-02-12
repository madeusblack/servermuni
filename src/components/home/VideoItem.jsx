/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';

const VideoItem = ({ title, fileName, link }) => {
  const videoMiniature = require(`../../assets/static/videos/${fileName}.jpg`);
  const videoMiniatureWebp = require(`../../assets/static/videos/${fileName}.webp`);

  return (
    <div className='videoContainer'>
      <a href={link} className='videoTitle' target='_blank' rel='noopener noreferrer'>

        <h3>{title}</h3>
        <svg version='1.1' className='playButton' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' enableBackground='new 0 0 512 512'>
          <g>
            <g className='svg'>
              <path d='m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9 16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z' />
              <path d='M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,480.1    C132.4,480.1,31.9,379.6,31.9,256S132.4,31.9,256,31.9S480.1,132.4,480.1,256S379.6,480.1,256,480.1z' />
            </g>
          </g>
        </svg>

        <picture>
          <source srcSet={videoMiniatureWebp} type='image/webp' />
          <source srcSet={videoMiniature} type='image/jpeg' />
          <img className='videoImage' csr={videoMiniature} alt={title} />
        </picture>
      </a>
    </div>
  );
};
export default VideoItem;
