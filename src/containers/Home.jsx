import React from 'react';
import '../assets/styles/Home.scss';
import Carrousel from '../components/home/Carrousel';
import Highlighted from '../components/home/Highlighted';
import Links from '../components/home/Links';
import ContenedorYoutube from '../components/home/ContenedorYoutube';
import Informaciones from '../components/home/Informaciones';
import CovidVacunacion from '../components/home/CovidVacunacion';
import Posts from '../components/home/Posts';

const Home = () => (
  <div className='main'>
    <Carrousel />
    <ContenedorYoutube />
    <Posts />
    <CovidVacunacion />
    <Links />
    <Highlighted />
    <Informaciones />
  </div>
);
export default Home;