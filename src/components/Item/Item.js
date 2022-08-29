import React from 'react'

const Item = ({item}) => {
  return (
    <div>
        <p>{item.title}</p>
        <img src={item.img} alt="" width="400"/>
        <h5>${item.price}</h5>
    </div>
  )
}

export default Item;
