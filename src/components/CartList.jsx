import React from 'react'
import { CartItem } from './CartItem';

export const CartList = ({ cart }) => {
    return (
        <section>
            <div className='carrito-list-products'>
                {
                    cart.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
