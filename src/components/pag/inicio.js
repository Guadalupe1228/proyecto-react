import "./style-ini.css";
import { Outlet,Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">SPA ADARA</span>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <Link to="/Servicios">SERVICIOS</Link>
        <Link to="/contactanos">CONTACTO</Link>
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


const Slogan = () => {
  return (
    <div className="slogan">
      <p>UN LUGAR DONDE LA BELLEZA ES CONSECUENCIA <br></br> DE TU SALUD</p>
    </div>
  );
};
const Boton = () => {
  return (
    <div className="btn_contactar">
      <button> <Link to="/contactanos">CONTACTAR</Link></button>
    </div>
  );
};
export  {Navbar,Slogan,Boton};