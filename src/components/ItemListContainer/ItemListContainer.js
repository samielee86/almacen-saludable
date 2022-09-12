import React, { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'
import products from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    const { categoryName } = useParams();

    useEffect( ()=>{
        const getProducts = () =>
            new Promise((res, rej) => {
                const prodFiltrados = products.filter( (prod)=> prod.category === categoryName )
            setTimeout( () => {
                res(categoryName ? prodFiltrados : products);
            }, 2000);
        });

        getProducts()
            .then((data)=>{
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryName])
    
    return (
        <div>
            <h2 className={styles.h2}>{props.title}</h2>
            <ItemList items={items}/>
            
        </div>
    );
}

export default ItemListContainer;