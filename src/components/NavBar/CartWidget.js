import styles from './NavBar.module.css'

export const CartWidget = () => {
    return(
        <span className={`material-symbols-outlined ${styles.cartWidget}`}>
            shopping_cart
        </span>
    )
};