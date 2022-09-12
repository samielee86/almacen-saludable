import React from 'react'
import { CartWidget } from './CartWidget'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className={styles.navContainer} >
                <Link to='/' className={styles.navTitle}><h2 >ALMACEN SALUDABLE</h2></Link>
                <ul className= {styles.navUl}>
                        <Link to="/category/aceites" className={styles.navUlLi}>ACEITES</Link>
                        <Link to="/category/frutos-secos" className={styles.navUlLi}>FRUTOS SECOS</Link>
                        <Link to="/category/sal" className={styles.navUlLi}>SAL</Link>
                        <Link to="/category/miel" className={styles.navUlLi}>MIEL</Link>
                        <Link to="/category/cookies" className={styles.navUlLi}>COOKIES</Link>
                        <Link to="/category/pastas" className={styles.navUlLi}>PASTAS</Link>
                </ul>
                <Link to='/cart'> <CartWidget/> </Link>
            </nav>
    </>
    
  )
}

export default NavBar