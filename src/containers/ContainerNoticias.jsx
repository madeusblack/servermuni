/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getVideoSource } from '../actions';
import classes from '../assets/styles/ContainerNoticias.module.css';

const ContainerNoticias = (props) => {
  const {
    galery,
    title,
    subTitle,
    date,
    audios,
    etiquetas,
    contenido,
    imagenesPost,
    videosPost,
  } = props.reading;
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.reading).length > 0;

  useEffect(() => {
    dispatch(getVideoSource(id));
  }, [dispatch, id]);

  return hasPlaying ? (
    <div className={galery ? classes.containerGalery : classes.ContainerNoticia}>
      <div className={classes.headerNoticia}>
        <h1 className={classes.text}>
          {title}
        </h1>
        <h4 className={classes.text}>
          {subTitle}
        </h4>
        <h5 className={classes.text}>
          {date}
        </h5>
        <div className={classes.audioNoticias}>
          {
            audios.map((audio, index) => {
              if (audio) {
                return (
                  <div className={classes.audioEtiquetaContainer}>
                    <label htmlFor={audio} className={classes.text}>
                      {etiquetas[index]}
                    </label>
                    <audio
                      key={audio}
                      src={require(`../assets/static/noticias/audios/${audio}.mp3`)}
                      className={classes.audio}
                      controls
                    />
                  </div>
                );
              };
              return '';
            })
          }
        </div>
      </div>
      <div className={classes.contenidoNoticia}>
        {
          contenido.map((parrafo) => {
            return (
              <p key={parrafo} className={classes.text}>
                {parrafo}
              </p>
            );
          })
        }
      </div>
      <div className={galery ? classes.galery : classes.lateralImages}>
        {
          imagenesPost.map((image) => {
            return (
              <img
                key={image}
                src={require(`../assets/static/noticias/imagenes/${image}.jpg`)}
                className={classes.imgItem}
                alt=''
              />
            );
          })
        }
        {
          videosPost.map((video) => {
            return (
              <video
                controls
                preload='none'
                key={video}
                poster={require(`../assets/static/noticias/videos/${video}.jpg`)}
                src={require(`../assets/static/noticias/videos/${video}.mp4`)}
                className={classes.videoPost}
                type='video/mp4'
              />
            );
          })
        }

      </div>
    </div>
  ) : <h1>no encontrado</h1>;
};
const mapStateToProps = (state) => {
  return {
    reading: state.reading,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContainerNoticias);
