import React from 'react'
import { ItemCount } from './ItemCount'
import { useState } from 'react'

export const ItemDetail = ({ productos }) => {
    
    return (



        <>
            <article className='item-container'>
                <div className="item-img">
                    <img loading="lazy" src={"https://pm1.aminoapps.com/6796/55d504be3ff4187b037e349dde1167579579028bv2_00.jpg"} alt="" />
                </div>
                <div className="item-description">
                    <h3 >Producto {productos.title}</h3>
                    <p>{"Añadir texto ahora"}</p>
                </div>
                <div className="item-precio">
                    <p>Pr ${productos.price}</p>
                </div>
                <ItemCount></ItemCount>
            </article>
            
        </>


    )
}
