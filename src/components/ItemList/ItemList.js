import React from 'react'
import Item from '../Item/Item'
import ItemLists from './ItemList.module.css'


const ItemList = (items) => {
    
    return (
        <div className={ItemLists}>
           {items.items.map((item)=> <Item item={item} key={item.id}/>)}
        </div>
  )
  }

export default ItemList;