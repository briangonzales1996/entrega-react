import React, { useContext, useEffect, useState } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router';
import { CartContext } from '../context/CartContext';
export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const parametro = useParams();
  const [loading, setLoading] = useState(false);
  const value = useContext((CartContext))
  
  
  useEffect(() => {
    obtenerProductos()
  }, [parametro.id])
  

  const obtenerProductos = async () => {
    
    // 'https://dummyjson.com/products/category/smartphones'
    let url = "";
    Object.keys(parametro).length >= 1?
    url = "https://fakestoreapi.com/products/category/" + parametro.id:
    //url = 'https://dummyjson.com/products';
    url = "https://fakestoreapi.com/products"
    
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
      setLoading(true);
      
    } catch (error) {
      console.error(error);
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
