import React from 'react'

export const CardWidger = ({cantidad}) => {
  return (
    <div className="carrito-burbuja">
        <i>🛒</i>
        <span>{cantidad}</span>
    </div>
  )
}
