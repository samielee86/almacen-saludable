import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
          <ItemListContainer saludo="Bienvenidos!"/>
        </main>
        <footer>Footer</footer>
    </>
  )
}

export default App