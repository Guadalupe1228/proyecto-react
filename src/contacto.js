import React from 'react'
import { Outlet,Link } from "react-router-dom";
import { useState } from 'react';
import './mapa.css'

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="Navbar">
        <span className="nav-logo1">CONTACTANOS</span>
        <div className={`nav-items ${isOpen && 'open'}`}>
        <Link to="/principal">INICIO</Link>
          <Link to="/Servicios">SERVICIOS</Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && 'open'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      <Outlet/>
      </div>
    );
  };
  const Cont = () => {
    return (
      <div className="contacto">
      <p className='t'>Teléfonos:</p>
      <p className='i'>91-1234-567 & +34-91-1234-567</p>
      <p className='t'>Email:</p>
      <p className='i'>spa-adara@gmail.com</p>
      </div>
    );
  };
  export {Navbar1, Cont};