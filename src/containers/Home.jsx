import React from 'react';
import '../assets/styles/Home.scss';
import Carrousel from '../components/home/Carrousel';
import Highlighted from '../components/home/Highlighted';
import Links from '../components/home/Links';
import ContenedorYoutube from '../components/home/ContenedorYoutube';
import Informaciones from '../components/home/Informaciones';
import Posts from '../components/home/Posts';

const Home = () => (
  <div className='main'>
    <Carrousel />
    <Posts />
    <Links />
    <ContenedorYoutube />
    <Highlighted />
    <Informaciones />
  </div>
);
export default Home;
