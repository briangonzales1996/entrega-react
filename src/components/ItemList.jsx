import React from 'react'
import { Item } from './Item'

export const ItemList = ({ products }) => {
    return (
        <>
            <section className="products-list">
                <div>
                    <h1>LISTA DE PRODUCTOS DISPONIBLES</h1>
                    <div className="items-container">
                        {
                            products.map((item) => {
                                const { title, id,price,description,images } = item;
                                
                                return (<Item key={id} id={id} title={title} precio={price} descripcion={description} img={images[0]}></Item>)
                            })
                        }
                    </div>
                </div>
            </section>
        </>

    )
}
