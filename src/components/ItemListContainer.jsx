import React, { useContext, useEffect, useState } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router';
import { CartContext } from '../context/CartContext';
import { getProducts, getProductsCategory } from '../firebase/db';
export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const parametro = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obtenerProductos()
  }, [parametro.id])
  

  const obtenerProductos = async () => {
    if(Object.keys(parametro).length >= 1){
      const datosProducts =  await getProductsCategory(parametro.id);
      setProductos(datosProducts);
      setLoading(true);
    }
    else{
      const datosProducts = await getProducts();
      setProductos(datosProducts)
      setLoading(true);
      
    }  
  }
  return (
    <>
      {loading ? <ItemList products={productos} /> :
        <div className='cargando'>CARGANDO CONTENIDO</div>
      }
    </>
  )
}
