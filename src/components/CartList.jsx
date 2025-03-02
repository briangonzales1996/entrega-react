import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartList = ({ cart }) => {
    const { addInputCart } = useContext(CartContext);

    const handleAddInput = (e, id) => {
        addInputCart(e, id)
    }

    return (
        <section>
            <div className='carrito-list-products'>
                {
                    cart.map((item) => {
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
                    })
                }
            </div>
        </section>
    )
}
