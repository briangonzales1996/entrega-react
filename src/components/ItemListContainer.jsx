import React from 'react'

export const ItemListContainer = ({text}) => {
  return (
    <section className="background-principal">
            <div>
                <h3>Productos tecnologicos para tu hogar</h3>
                <h1>Tenemos descuentos y nuevas ofertas cada semana</h1>
                <button>{text}</button>
            </div>
    </section>
  )
}
