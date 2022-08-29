import React, {useState} from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [qty, setQty] = useState(initial)

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
            <button onClick={onAdd}>Add to Cart</button>
        </>
    )
        
}

export default ItemCount;
