import React, { useEffect, useState } from 'react'
import { CartWidget } from './CartWidget'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const catCollection = collection(db, 'categories')
    getDocs(catCollection)
    .then((res)=> {
      const cats = res.docs.map((cat)=>{
        return {
          id: cat.id,
          ...cat.data()
        }
      })
      setCategories(cats);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <>
        <nav className={styles.navContainer} >
                <Link to='/' className={styles.navTitle}><h2 >ALMACEN SALUDABLE</h2></Link>
                <ul className= {styles.navUl}>
                  <>
                    {
                      categories.map((cat)=> (
                        <Link key={cat.route} to={`/category/${cat.route}`} className={styles.navUlLi}>{cat.name}</Link>
                      ))
                    }
                  </>
                </ul>
                <Link to='/cart'> <CartWidget/> </Link>
            </nav>
    </>

  )
}

export default NavBar
