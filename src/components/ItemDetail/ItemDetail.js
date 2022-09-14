import React, {useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const [qty, setQty] = useState(0)
    const { cart, addItem } = useContext(CartContext);
    const onAdd = (q) => {
        setQty(q);
        addItem(item, q);
    };

    console.log(cart)
    
    return (
        <>
            <div>
                <h4>{item.title}</h4>
                <img src={item.img} alt="" width="700"/>
                <p>{item.description}</p>
                <h5>${item.price}</h5>
            </div>
            { qty === 0 ? (
                <ItemCount 
                stock={item.stock}
                initial={1}
                onAdd={onAdd}
                />
                ) : (
                <Link to="/cart">Go to Cart</Link>
                )
            }
        </>
    );
};

export default ItemDetail;