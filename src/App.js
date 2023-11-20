
import { Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Servicios from './Servicios.js';
import Principal from './principal.js';
import Contactanos from './contactanos.js';

const App = () => {
  return (
      <div>
        <Routes >
          <Route path="/" element={<Principal/>}/>
          <Route path="/Servicios" element={<Servicios/>}/>
          <Route path="/principal" element={<Principal/>}/>
          <Route path="/contactanos" element={<Contactanos/>}/>
        </Routes >
      </div>
  );
};

export default App;