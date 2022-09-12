import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'

const Item = ({item}) => {
  return (
      <Link to={`/detail/${item.id}`} className={styles.itemCard}>
        <div className={styles.textContainer}>
          <div className={styles.offers}>30% OFF</div>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.starContainer}>
            <span className={`material-symbols-rounded ${styles.yellowStar}`}>star</span>
            <span className={`material-symbols-rounded ${styles.yellowStar}`}>star</span>
            <span className={`material-symbols-rounded ${styles.yellowStar}`}>star</span>
            <span className={`material-symbols-rounded ${styles.yellowStar}`}>star</span>
            <span className={`material-symbols-rounded ${styles.greyStar}`}>star</span>
          </div>
          <h5 className={styles.priceContainer}><span>$</span>{item.price}  <span>  500gr</span></h5>
          <div className={styles.favoriteCart}>
            <button className={styles.heart}><span class="material-icons">favorite_border</span></button>
            <button className={styles.addShoppingCart}><span class="material-icons">add_shopping_cart</span></button>
          </div>
        </div>
        <div className={styles.img}>
          <img src={item.img} alt="" width="100%"/>
        </div>
      </Link>
  )
}

export default Item;
