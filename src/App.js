import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext'
import './index.css'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="wrapper-site">
            <header>
                <NavBar/>
            </header>
            <Main />
            <footer>Footer</footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;