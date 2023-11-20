import "./style-ser.css";
import { Outlet,Link } from "react-router-dom";
import { useState } from 'react';
import faciales1 from './faciales.jpg';
import masaje1 from './masaje.jpeg';
import manicura1 from './manicura.jpg';
import reducivo1 from './masaje-re.jpg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo1">NUESTROS SERVICIOS</span>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <Link to="/principal">INICIO</Link>
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
const Informacion = () => {
  return (
    <div className="info-container">
    <div className="faciales">
      <img src={faciales1} alt="Faciales" />
      <div className="info">
        <p>FACIALES</p>
        <ul>
          <li>SENCILLO $250</li>
          <li>AROMATERAPIA $350</li>
        </ul>
      </div>
    </div>

    <div className="masajes">
      <img src={masaje1} alt="Masajes" />
      <div className="info">
        <p>MASAJES RELAJANTES</p>
        <ul>
          <li>SENCILLO $300</li>
          <li>AROMATERAPIA $400</li>
        </ul>
      </div>
    </div>

    <div className="manicura">
      <img src={manicura1} alt="Manicura" />
      <div className="info">
        <p>MANICURA</p>
        <ul>
          <li>SENCILLO $250</li>
          <li>GELISH $400</li>
          <li>PEDICURA $550</li>
        </ul>
      </div>
    </div>

    <div className="reductivos">
      <img src={reducivo1} alt="Masajes Reductivos" />
      <div className="info">
        <p>MASAJES REDUCTIVOS</p>
        <ul>
          <li>ABDOMEN $500</li>
          <li>PIERNAS $1000</li>
        </ul>
      </div>
    </div>
  </div>
);
};
export {Navbar,Informacion};
