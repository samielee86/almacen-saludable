import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../firebaseConfig'
import styles from './Form.module.css'

const Form = ({cart, total, clear, handleOrderID }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {name, phone, email},
            cart: cart,
            total: total,
            date: serverTimestamp()
        }
        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order)
        .then((res)=>{
            handleOrderID(res.id)
            clear();
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

  return (
    <form action="" onSubmit={handleSubmit} className={styles.container}>
        <input
            type="text"
            placeholder='Nombre'
            name="name"
            value={name}
            onChange={handleNameChange}
        />
        <input
            type="text"
            placeholder='Nro. Tel/Móvil'
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
        />
        <input
            type="text"
            placeholder='E-mail'
            name="email"
            value={email}
            onChange={handleEmailChange}
        />
        <button className={styles.buyButton}>Comprar</button>
    </form>
  )
}

export default Form