import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router';

export const CartWidger = () => {
  const {getQuantity} = useContext(CartContext);
  const navigate = useNavigate();
  const result = getQuantity()
  const handleClick=()=>{
    navigate("/cart")
  }
    
  
  
  
  return (
    <div className="carrito-burbuja" onClick={handleClick}>
        <i>🛒</i>
        <span>{result}</span>
    </div>
  )
}
