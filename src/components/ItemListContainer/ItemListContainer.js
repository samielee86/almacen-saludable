import React, { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'
import products from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
//import { collection, getDocs, query, where } from 'firebase/firestore'
//import { db } from '../../firebaseConfig'

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    const { categoryName } = useParams();

    useEffect( ()=>{

        // const productCollection = collection(db, "products");
        // const q = query(productCollection, where('category', '==', categoryName)); // hacer if/else igual que antes para mostrar todos o solo filtrados
        // getDocs(q)
        // .then((res) => {
        //     const products = res.docs.map((product) =>{
        //         return {
        //             id: product.id,    // como el id no esta en data(), se saca de la propiedad del objeto product
        //             ...product.data(), // data() es un metodo de firestore que muestra los datos del producto
        //         }
        //     });
        //     setItems(products);
        //     //console.log(res)
        //     //console.log(res.docs)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
        // // .finally(()=>{
        // //     //setIsLoading
        // // })

        const getProducts = () =>
            new Promise((res, rej) => {
                const prodFiltrados = products.filter( (prod)=> prod.category === categoryName )
            setTimeout( () => {
                res(categoryName ? prodFiltrados : products);
            }, 1000);
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