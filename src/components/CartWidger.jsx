import React from 'react'

export const CartWidger = ({cantidad}) => {
  return (
    <div className="carrito-burbuja">
        <i>🛒</i>
        <span>{cantidad}</span>
    </div>
  )
}
