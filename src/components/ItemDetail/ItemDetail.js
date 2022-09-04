import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div>
            <h4>{item.title}</h4>
            <img src={item.img} alt="" width="700"/>
            <p>{item.description}</p>
            <h5>${item.price}</h5>
        </div>
    );
};

export default ItemDetail;