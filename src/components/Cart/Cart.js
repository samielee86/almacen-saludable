import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import styles from './Cart.module.css'
import Form from '../Form/Form'

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext)
  const [orderID, setOrderID] = useState('')

  const total= totalPrice();

  const handleOrderID = (id) =>{
    setOrderID(id)
  }

  if(orderID) {
    return (<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center'
    }}>
      <h3>Gracias por elegirnos! El código de tu compra es: {orderID}</h3>
    </div>
  )}

  if (cart.length === 0 ) {
    return (<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center'
    }}>
      <h3>Tu carrito de compras está vacío!</h3>
      <Link to='/'><button className={styles.clearButton}>Ir a la tienda</button></Link>
    </div>
  )}

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          {cart.map((prod)=> (
          <div key={prod.id} className={styles.itemsContainer}>
            <Link to={`/detail/${prod.id}`} className={styles.productoContainer}>
              <img src={prod.img} alt="" width="100"/>
              <h3>{prod.title}</h3>
            </Link>
            <h5>${prod.price}</h5>
            <h5>Cant: {prod.qty}</h5>
            <h5>Subtotal: $ {prod.price * prod.qty}</h5>
            <button onClick={() => removeItem(prod.id)} className={styles.delButton}><span className="material-symbols-outlined">delete</span></button>
          </div>
        ))}
        </div>
        <button onClick={() => clear()} className={styles.clearButton} >Eliminar Carrito</button>
      </div>
        <div className={styles.totalContainer}>
          <div>
            <h3>Proceder a la compra</h3>
            <span className={styles.total}>
              <h4>Total: </h4>
              <h5 className={styles.priceContainer}><span>$</span>{total}</h5>
            </span>
          </div>
          <Form cart={cart} total={total} clear={clear} handleOrderID={handleOrderID}/>
        </div>
    </section>
  )
}

export default Cart