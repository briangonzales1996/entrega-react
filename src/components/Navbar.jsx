import React from 'react'
import { CardWidger } from './CardWidger'
import { NavLink } from 'react-router'
export const Navbar = () => {
  return (


    <header>

      <div className="container-main">
        <div className="logo">
          <NavLink to={"/"}><img src="../public/assets/logo.png" alt="logo de windows" /></NavLink>
        </div>
        <nav className="categorias">
          <ul>
            <li><NavLink to="/category/motorcycle">MOTOR</NavLink></li>
            <li><NavLink to="/category/tablets">TABLETS</NavLink></li>
            <li><NavLink to="/category/smartphones">MOVILES</NavLink></li>
            <li><NavLink to="/category/laptops">NOTEBOOK</NavLink></li>
            <li><NavLink to="/category/mobile-accessories">ACCESSORIES</NavLink></li>
            
          </ul>
          <CardWidger cantidad='10'></CardWidger>
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
