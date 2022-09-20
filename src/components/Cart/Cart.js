import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import styles from './Cart.module.css'

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
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          {cart.map((prod)=> (
          <div key={prod.id} className={styles.itemsContainer}>
            <div className={styles.productoContainer}>
              <img src={prod.img} alt="" width="100"/>
              <h3>{prod.title}</h3>
            </div>
            <h5>${prod.price}</h5>
            <h5>Cant: {prod.qty}</h5>
            <h5>Subtotal: $ {prod.price * prod.qty}</h5>
            <button onClick={() => removeItem(prod.id)} className={styles.delButton}><span className="material-symbols-outlined">delete</span></button>
          </div>
        ))}
        </div>
        <button onClick={() => clear()} className={styles.clearBuyButton} >Eliminar Carrito</button>
      </div>
        <div className={styles.totalContainer}>
          <div>
            <h3>Total:</h3>
            <h5 className={styles.priceContainer}><span>$</span>{totalPrice()}</h5>
          </div>
          <button className={styles.clearBuyButton}>Comprar</button>
        </div>
    </section>
  )
}

export default Cart