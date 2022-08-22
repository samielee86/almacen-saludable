import React from 'react'
import styles from './ItemListContainer.module.css'

const ItemListContainer = (props) => {
    return <h2 className={styles.h2}>{props.saludo}</h2>
}

export default ItemListContainer;

