import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext)
  return (
    <div>
      {cart.map((prod)=> (
      <div key={prod.id}>
        <h2>{prod.title}</h2>
        <button onClick={() => removeItem(prod.id)}>Eliminar</button>
      </div>
      ))}
      <button onClick={() => clear()}>Clear Cart</button>
    </div>
  )
}

export default Cart