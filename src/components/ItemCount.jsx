import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
export const ItemCount = ({producto}) => {
  const [count,setCount] = useState(0);
  const {addToCart} = useContext(CartContext);

  const handleClickResta = ()=>{
    setCount(count-1);
  }

  const handleClickSuma =()=>{
    setCount(count+1)
  }
  const handleAddToCart = ()=>{
    addToCart(producto,count)
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
