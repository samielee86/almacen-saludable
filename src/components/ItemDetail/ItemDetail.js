import React, {useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import styles from './ItemDetail.module.css'

const ItemDetail = ({item}) => {
    const [qty, setQty] = useState(0)
    const { /*cart*/ addItem, getQty } = useContext(CartContext);
    const onAdd = (q) => {
        setQty(q);
        addItem(item, q);
    };
    // console.log(cart)
    
    const qtyInCart = getQty(item.id)
    
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <div className={styles.img}>
                    <img src={item.img} alt="" width="100%"/>
                </div>
                <div className={styles.text}>
                    <h4>{item.title}</h4>
                    <span>{item.description}</span>
                    <h5 className={styles.priceContainer}><span>$</span>{item.price}</h5>
                    { qty === 0 ? (
                        <ItemCount 
                        stock={item.stock}
                        initial={qtyInCart}
                        onAdd={onAdd}
                        />
                        ) : (
                            <Link to="/cart" className={styles.cartButton} >Ir al Carrito</Link>
                            )
                        }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;