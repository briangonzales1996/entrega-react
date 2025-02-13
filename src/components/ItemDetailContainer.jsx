import React, { useState } from 'react'
import { ItemDetail } from './ItemDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {

    const [productos,setProductos]= useState({})
    const [loading, setLoading] = useState(false);

    const parametro = useParams();
    useEffect(() => {
        obtenerProductos()
    }, [parametro])

    const obtenerProductos = async () => {
        
        const   url = "https://fakestoreapi.com/products/" + parametro.id; 
        console.log(url)
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '44a5014774msh39217d45172db1bp1b9edfjsnfb03487126ca',
                'x-rapidapi-host': 'mercado-libre7.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setProductos(result);
            setLoading(true)
        } catch (error) {
            console.error(error);
        }
    }
console.log(productos)

    return (
        <>
            {loading?<ItemDetail productos ={productos}></ItemDetail>:<div className='cargando'>CARGANDO</div>}
        </>
        
    )
}
