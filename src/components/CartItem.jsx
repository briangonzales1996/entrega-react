import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({item}) => {
    const { addInputCart } = useContext(CartContext);

    const handleAddInput = (e, id) => {
        addInputCart(e, id)
    }

    return (
        <article key={item.id}>
            <div className='list-product-name'>
                <figure>
                    <img src={item.image} alt="" />
                </figure>
                <h2>
                    {item.title}
                </h2>
            </div>
            <div className='list-product-precio'>
                <h4>${item.price}</h4>
                <input defaultValue={item.quantity} onChange={(e) => handleAddInput(e, item.id)} type="number" min={1} max={20} />
                <h4>${(item.quantity * item.price)}</h4>
            </div>
        </article>
    )
}
