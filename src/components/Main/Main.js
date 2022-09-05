import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart'
import {Route, Routes} from 'react-router-dom'

const Main = () => {

  return (
    <Routes>
        <Route path='/' element={<ItemListContainer title="Productos Destacados"/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer title="Productos Destacados"/>}/>
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/detail/:idProd' element={<ItemDetailContainer />}/>
    </Routes>
  );
};

export default Main;