import React, { useState, useEffect } from 'react'
import styles from './ItemCount.module.css'

const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [qty, setQty] = useState(initial)

    useEffect(() => {
        setQty(initial);
    }, [initial])

    const add = () => {
        qty < stock && setQty(qty + 1);
    }

    const subtract = () => {
        qty > 1 && setQty(qty - 1);
    }

    return (
        <div className={styles.counter}>
            <div className={styles.addSubsContainer}>
                <button onClick={subtract} className={styles.addSubs}><span className="material-symbols-outlined">remove</span></button>
                <span className={styles.qty}>{qty}</span>
                <button onClick={add} className={styles.addSubs}><span className="material-symbols-outlined">add</span></button>
            </div>
            <button onClick={()=>{onAdd(qty)}} className={styles.addButton}>Agregar al Carrito</button>
        </div>
    )

}

export default ItemCount;