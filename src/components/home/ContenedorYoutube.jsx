import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';

const ContenedorYoutube = () => {
  return (
    <div>
      <h3 className='infoTitle'>Últimos Videos</h3>
      <div className='mainContainerYoutube'>
        <iframe loading='lazy' width='560' height='315' src='https://www.youtube.com/embed/2sUmUJsSp2s' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        <iframe loading='lazy' width='560' height='315' src='https://www.youtube.com/embed/EUk02vGY1-o' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

