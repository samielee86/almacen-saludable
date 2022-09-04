import React, {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../mock/products'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect( ()=>{
        const getProduct = () => new Promise((res,rej)=>{
            const product = products.find( prod => prod.id === 1)

            setTimeout( () => {
                res(product);
            }, 2000);
        });

        getProduct()
        .then((data)=>{
            setItem(data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;