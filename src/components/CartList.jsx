import React from 'react'

export const CartList = ({cart}) => {
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
                                    <input defaultValue={item.quantity} type="number" min={0} max={20} />
                                    <h4>${item.quantity * item.price}</h4>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
