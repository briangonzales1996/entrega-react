import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/itemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container-main">
            <div className="logo">
                <img src="../public/assets/logo.png" alt=""/>
            </div>
            <Navbar></Navbar>
        </div>
        <ItemListContainer  text='proximamente'></ItemListContainer>
    </header>
    </>
  )
}

export default App
