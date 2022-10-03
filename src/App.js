import React from 'react'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext'
import './index.css'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="wrapper-site">
            <Header />
            <Main />
            <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;