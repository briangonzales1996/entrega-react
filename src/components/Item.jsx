import React from 'react'
import { Link } from 'react-router'

export const Item = ({ title, precio, descripcion, img, id }) => {
    return (
        <>
            <article >
                <div className="item-img">
                    <img loading="lazy" src={img} alt="" />
                </div>
                <div className="item-description">
                    <h3>Producto {title}</h3>
                    <p>{descripcion}</p>
                </div>
                <div className="item-precio">
                    <p>Pr ${precio}</p>
                    <Link to={"/product/" + id}><button>BUY</button></Link>
                </div>
            </article>
        </>
    )

}

