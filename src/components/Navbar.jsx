import React, { useState } from 'react'
import { CartWidger } from './CartWidger'
import { NavLink } from 'react-router'

export const Navbar = () => {

  const base_path = import.meta.env.BASE_URL;
  const [height,setHeight] = useState(true)
  const handleClick =() =>{
    setHeight(!height)
  }
  const handleClickClose = ()=>{
    setHeight(!height)
  }
 
  return (
    <header>
      <div className="container-main">
        <div onClick={handleClick} className='desplegable' >
          <img src={`${base_path}assets/desplegable.png`} alt="boton para desplegar menu" />
        </div>
        <div className="logo">
          <NavLink to={"/"}><img src="public/assets/logo.png" alt="logo de windows" /></NavLink>
        </div>
        <nav className="categorias">
          <ul className={`${height?"":"animation"}`}>
            <div onClick={handleClickClose} className='categorias__close'>
              <img src="/assets/close.png" alt="cierre de menu" />
            </div>
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
          <h3>Productos tecnológicos para tu hogar</h3>
          <h1>Tenemos descuentos y nuevas ofertas cada semana</h1>
          <button>proximamente</button>
        </div>
      </section>
    </header>
  )
}
