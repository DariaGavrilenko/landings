import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Konstrukt } from './Konsrukt/Konstrukt';
import { MNTN } from './MNTN/MNTN';
import { Nav } from './Nav';
import { Webovio } from './Webovio/Webovio';



function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Konstrukt />} />
        <Route path="/webovio" element={<Webovio />} />
        <Route path="/MNTN" element={<MNTN />} />
      </Routes>
    </>
  );
}

export default App;
