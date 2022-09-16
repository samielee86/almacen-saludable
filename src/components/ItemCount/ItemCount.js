import React, { useState, useEffect } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [qty, setQty] = useState(initial)
    
    useEffect(() => {
        setQty(initial);
    }, [initial])

    const add = () => {
        qty < stock && setQty(qty + 1);
    }

    const subtract = () => {
        qty > initial && setQty(qty - 1);
    }

    return (
        <>
            <button onClick={add}>+</button>
            <p>{qty}</p>
            <button onClick={subtract}>-</button>
            <button onClick={()=>{onAdd(qty)}}>Add to Cart</button>
        </>
    )
        
}

export default ItemCount;