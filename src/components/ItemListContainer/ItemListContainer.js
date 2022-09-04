import React, { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'
import products from '../../mock/products'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        const getProducts = () => 
            new Promise((res, rej) => {
            setTimeout( () => {
                res(products);
            }, 2000);
        });

        getProducts()
            .then((data)=>{
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    
    return (
        <div>
            <h2 className={styles.h2}>{props.title}</h2>
            <div><ItemList items={items} /></div>
            
        </div>
    );
}

export default ItemListContainer;