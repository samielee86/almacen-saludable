import React from 'react'
import { CartWidget } from './CartWidget'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
        <nav className={styles.navContainer} >
                <h2 className = {styles.navTitle}>ALMACEN SALUDABLE</h2>
                <ul className= {styles.navUl}>
                    <li className={styles.navUlLi}>
                        <a href="https://google.com">PRODUCTOS</a>
                    </li>
                    <li className={styles.navUlLi}>
                        <a href="https://google.com">EL ALMACEN</a>
                    </li>
                    <li className={styles.navUlLi}>
                        <a href="https://google.com">MÁS INFORMACION</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
    </>
    
  )
}

export default NavBar