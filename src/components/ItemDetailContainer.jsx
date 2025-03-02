import React, { useState } from 'react'
import { ItemDetail } from './ItemDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getProductsId } from '../firebase/db';


export const ItemDetailContainer = () => {
    
    const [productos,setProductos]= useState({})
    const [loading, setLoading] = useState(false);
    const parametro = useParams();

    useEffect(() => {
        obtenerProductos()
    }, [parametro.id])

    const obtenerProductos = async () => {
        try {
            const result = await getProductsId(parametro.id);
            if(!result)throw new Error("no se realizo la consulta")
            setProductos(result);
            setLoading(true)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            {loading?<ItemDetail productos ={productos}></ItemDetail>:<div className='cargando'>CARGANDO</div>}
        </>
        
    )
}
