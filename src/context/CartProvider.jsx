import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCard] = useState([]);

    function verificarProductoExistente(producto) {
        const ids = [...cart].map((product) => product.id);       
        const condicion = ids.includes(producto.id)
        return condicion
    }

    const addToCart = (producto, count) => {
        const condicion = verificarProductoExistente(producto);
        if (condicion) {
            const quantityMod = [...cart].map((item) => {
                if (item.id == producto.id) item.quantity += count
                return item
            })
            setCard(quantityMod)
        }
        else {
            producto = { ...producto, quantity: count }
            setCard([...cart, producto]);
        }
    }
    
    const getQuantity = () => {
        const quantities = cart.map((item) => (
            item.quantity
        ))
        const result = quantities.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return result
    }


    const getTotal = () => {
        const total = cart.map((product) => {
            
            return product.quantity * product.price
        })
        const result = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return result
    }


    const addInputCart= (e,id)=>{
        let valor = e.target.value;
        valor = parseInt(valor)
        const cartNuevo = [...cart].map((item)=>{
            if(id==item.id)item.quantity=valor;
            return item
        })
        setCard(cartNuevo)
        
    }



    return (
        <CartContext.Provider value={{ addToCart, cart, getQuantity, getTotal,addInputCart }}>
            {children}
        </CartContext.Provider>
    )
} 