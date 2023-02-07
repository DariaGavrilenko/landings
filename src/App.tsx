import React from 'react';
import './App.css';
import { Build } from './Build';
import { Capabilities } from './Capabilities';
import { Footer } from './Footer';
import { Headers } from './Headers';
import { Nav } from './Nav';
import { Story } from './Story';


function App() {
  return (
    <div className="App">
     <Headers/>
      <Nav />
      <Story />
      <Capabilities />
      <Build />
      <Footer />
    </div>
  );
}

export default App;
