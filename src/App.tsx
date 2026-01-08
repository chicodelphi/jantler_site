import React from 'react';
import alanImg from './assets/alan-jantsch.png';
import escritorioImg from './assets/escritorio.jpg';

export default function App() {
  return (
    <div style={{background:'#000', color:'#fff', minHeight:'100vh', padding:'40px'}}>
      <h1>Jantler Advocacia</h1>
      <img src={alanImg} alt="Alan Jantsch" width="200" />
      <img src={escritorioImg} alt="Escritório" width="300" />
    </div>
  );
}
