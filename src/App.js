import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/itemCount/itemCount'

const App = () => {

  const onAdd = () => {
    console.log('Hola! soy la funcion onAdd')
  }

  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
          <ItemListContainer saludo="Bienvenidos!"/>
          <ItemCount 
            stock={10}
            initial={1}
            onAdd={onAdd}
          />
        </main>
        <footer>Footer</footer>
    </>
  )
}

export default App;