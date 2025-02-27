import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children})=>{
    const [cart,setCard] = useState([]);
    

    const addToCart=(producto,count)=>{
        producto = {...producto,quantity:count}
        setCard([...cart,producto]);
        
    }
    const getQuantity=  ()=>{
        const quantities = cart.map((item)=>(
            item.quantity
          ))
          const result = quantities.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
          return result
    }
    

return(
    <CartContext.Provider value={{addToCart,cart,getQuantity}}>
        {children}
    </CartContext.Provider>
)   
} 