import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Konstrukt } from './Konsrukt/Konstrukt';
import { Nav } from './Nav';
import { Webovio } from './Webovio/Webovio';



function App() {
  return (
    <>
    <div>
      <Nav/>
    </div>
        <Routes>
      <Route path="/" element={<Konstrukt />} />
      <Route path="/webovio" element={<Webovio />} />
    </Routes>
    </>

  );
}

export default App;
