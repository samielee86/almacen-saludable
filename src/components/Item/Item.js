import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to={`/detail/${item.id}`}>
        <p>{item.title}</p>
        <img src={item.img} alt="" width="400"/>
        <h5>${item.price}</h5>
    </Link>
  )
}

export default Item;
