import React from 'react'
import { ItemCount } from './ItemCount'
import { useState } from 'react'

export const ItemDetail = ({ productos }) => {
    
    return (



        <>
            <article className='item-container'>
                <div className="item-img">
                    <img loading="lazy" src={productos.image} alt="" />
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
