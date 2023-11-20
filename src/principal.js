import React from 'react'
import { Boton, Navbar, Slogan } from './components/pag/inicio.js';
export const Principal = () => {
  return (
    <div>
        <Navbar />
        <Slogan/>
        <Boton />
    </div>
  )
}
export default Principal;
