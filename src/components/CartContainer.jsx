import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router';
import { CartList } from './CartList';
import { useNavigate } from 'react-router';

export const CartContainer = () => {
  const {cart,getTotal} = useContext(CartContext);
  const total = getTotal();
  const navigate = useNavigate()

  return (
    <div className='carrito-container'>
      <h1>CARRITO DE PRODUCTOS</h1>
      <div className='carrito-products'>
        <div className='carrito-detalle'>
          <div className='carrito-detalle-name'>
            <h3>Products</h3>
          </div>
          <div className='carrito-detalle-precio'>
            <h3>Precio</h3>
            <h3>Cantidad</h3>
            <h3>SubTotal</h3>
          </div>
        </div>      
        <CartList cart ={cart}></CartList>
        {cart.length === 0 && <div className='carrito-vacio'>SU CARRITO DE COMPRA ESTA VACIO</div>}
      </div>
      {cart.length !== 0 &&
        <div className='carrito-total-container'>
          <h2>CART TOTAL</h2>
          <div className='carrito-subTotal'>
            <h2>Subtotal</h2>
            <p>${total}</p>
          </div>
          <div className='carrito-total'>
            <h2>Total</h2>
            <p>${total}</p>
          </div>
          <button onClick={(e)=>navigate("/checkout")} >Comprar Todo</button>
        </div>
      }
      <div className='carrito-back'>
        <Link to={'/'}>
          <h2 onClick={(e)=>navigate("/")}>VOLVER A LISTA DE PRODUCTOS</h2>
        </Link>
      </div>
    </div>
  )
}
