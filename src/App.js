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
          <ItemListContainer greeting="Saludos!"/>
        </main>
        <footer>Footer</footer>
    </>
  )
}

export default App