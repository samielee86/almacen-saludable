import React, {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { idProd } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect( ()=>{

        const productCollection = collection(db, 'products')
        const ref = doc(productCollection, idProd)
        getDoc(ref)
        .then((res)=>{
            setItem({
                id: res.id,
                ...res.data()
            });
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false);
        })

    }, [idProd])

    return(
        <>
            { loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <ItemDetail item={item} />
                </>
            )
            }
        </>
    );

};

export default ItemDetailContainer;