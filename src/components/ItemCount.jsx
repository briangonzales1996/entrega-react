import React from 'react'
import { useState } from 'react';
export const ItemCount = () => {
  const [count,setCount] = useState(0);

  const handleClickResta = ()=>{
    setCount(count-1);
  }

  const handleClickSuma =()=>{
    setCount(count+1)
  }

  return (
    <div className='item-contador'>
        <button onClick={handleClickResta}>-</button>
        <span>{count}</span>
        <button onClick={handleClickSuma}>+</button>
    </div>
  )
}
