import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext)
  if (cart.length === 0 ) {
    return (<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center'
    }}>
      <h3>Tu carrito de compras está vacío!</h3>
      <Link to='/'><h2>Ir a la tienda</h2></Link>
    </div>
  )}
  return (
    
    <div>
      {cart.map((prod)=> (
      <div key={prod.id} 
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          border: '1px solid black'
          }}>
        <h3>{prod.title}</h3>
        <img src={prod.img} alt="" width="100"/>
        <h5>Cant: {prod.qty}</h5>
        <h5>Subtotal: $ {prod.price * prod.qty}</h5>
        <button onClick={() => removeItem(prod.id)}>Eliminar</button>
      </div>
      ))}
      <h3>Total: ${totalPrice()}</h3>
      <button onClick={() => clear()}>Clear Cart</button>
    </div>
  )
}

export default Cart