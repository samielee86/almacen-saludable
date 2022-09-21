import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../firebaseConfig'

const Form = ({cart, total, clear, handleOrderID }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {name, lastName, email},
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
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Nombre'
                name="name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder='Apellido'
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <input
                type="text"
                placeholder='E-mail'
                name="email"
                value={email}
                onChange={handleEmailChange}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form