import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.susContainer}>
            <span>
                <h2>Suscribite a nuestro Newsletter</h2>
                <h5>Para recibir las mejores ofertas y promociones de tus marcas y productos favoritos</h5>
            </span>
            <div className={styles.inputContainer}>
                <input className={styles.emailInput}type="text" placeholder='Ingresá tu direccion de email' name='email' />
                <button className={styles.emailButton}>ENVIAR</button>
            </div>
        </div>
        <div>
            <ul className={styles.info}>
                <li>Nosotros</li>
                <li>Contacto</li>
                <li>Términos y condiciones</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer