import React from 'react'
import { CardWidger } from './CardWidger'

export const Navbar = () => {
  return (
    
    <nav className="categorias">
        <ul>
            <li>PC</li>
            <li>LAPTOS</li>
            <li>MOVILES</li>
            <li>NOTEBOOK</li>
            <li>PC GAMERS</li>
        </ul>
        <CardWidger cantidad='10'></CardWidger>
    </nav>
  )
}
