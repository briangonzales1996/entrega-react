import React from 'react'
import { useState,useContext } from 'react';
import { CartContext } from '../context/CartContext'

export const ItemCount = ({ producto }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleClickResta = (e) => {
    let contador = count;
    if (contador == 1) {
      setCount(contador)
    }
    else {
      setCount(count - 1);
    }
  }

  const handleClickSuma = () => {
    setCount(count + 1)
  }
  const handleAddToCart = () => {
    addToCart(producto, count)
  }
  return (
    <div className='item-contador'>
      <button onClick={handleClickResta}>-</button>
      <span>{count}</span>
      <button onClick={handleClickSuma}>+</button>
      <button onClick={handleAddToCart}>Add Carrito</button>
    </div>
  )
}
