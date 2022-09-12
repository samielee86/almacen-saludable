import React, {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../mock/products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { idProd } = useParams();

    useEffect( ()=>{
        const getProduct = () => 
            new Promise((res, rej)=>{
                const product = products.find( (prod) => prod.id === Number(idProd))
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
    }, [idProd])

    return(
        <>
            <ItemDetail item={item}/>
        </>
    );
    
};

export default ItemDetailContainer;