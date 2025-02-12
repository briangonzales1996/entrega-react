import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemList } from './components/ItemList';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<div>Error 404</div>}></Route>
        </Routes>

      </BrowserRouter>


      {}

    </>
  )
}

export default App
