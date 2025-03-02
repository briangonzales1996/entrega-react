import React from 'react'
import { CartWidger } from './CartWidger'
import { NavLink } from 'react-router'

export const Navbar = () => {
  return (
    <header>
      <div className="container-main">
        <div className="logo">
          <NavLink to={"/"}><img  src="../public/assets/logo.png" alt="logo de windows" /></NavLink>
        </div>
        <nav className="categorias">
          <ul>
            <li><NavLink to="/category/pc">PC</NavLink></li>
            <li><NavLink to="/category/tablet">TABLETS</NavLink></li>
            <li><NavLink to="/category/movile">MOVILES</NavLink></li>
            <li><NavLink to="/category/notebook">NOTEBOOK</NavLink></li>
            <li><NavLink to="/category/accessory">ACCESSORIES</NavLink></li>
            
          </ul>
          <CartWidger cantidad='10'></CartWidger>
        </nav>
      </div>
      <section className="background-principal">
        <div>
          <h3>Productos tecnologicos para tu hogar</h3>
          <h1>Tenemos descuentos y nuevas ofertas cada semana</h1>
          <button>proximamente</button>
        </div>
      </section>
    </header>
  )
}
