import React, {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { idProd } = useParams();

    useEffect( ()=>{

        const productCollection = collection(db, 'products')
        const ref = doc(productCollection, idProd)
        getDoc(ref)
        .then((res)=>{
            setItem({
                id: res.id,
                ...res.data()
            });
        });

    }, [idProd])

    return(
        <>
            <ItemDetail item={item} />
        </>
    );

};

export default ItemDetailContainer;