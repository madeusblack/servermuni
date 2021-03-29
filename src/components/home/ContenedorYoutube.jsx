import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';
import VideoItem from './VideoItem';

const ContenedorYoutube = () => {
  return (
    <div className='mainContainerYoutube'>
      <div className='contenedorIframes'>
        <VideoItem
          link='https://www.youtube.com/watch?v=-Cr4oazxWJI&list=PLNXnxTQw1v0ZYPdhisJHiQfQgCfe59HVE'
          fileName='youtube'
          title='Día Internacional de la Mujer'
        />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

