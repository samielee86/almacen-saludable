import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemCount from '../itemCount/itemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Main = () => {
    const onAdd = (qty) => {
        alert(`Se agregaron ${qty} productos al carrito`)
      }
  return (
    <>
        <ItemListContainer title="Productos Destacados"/>
        <ItemDetailContainer/>
        <ItemCount 
            stock={10}
            initial={1}
            onAdd={onAdd}
        />
    </>
  )
}

export default Main;