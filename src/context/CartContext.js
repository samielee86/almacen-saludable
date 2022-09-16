import React from 'react-dom'
import { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            addQty(item, qty);
        } else {
            setCart([...cart, {...item, qty}]);
        }
    };
    
    const removeItem = (id) => {
        const cartFiltered = cart.filter( (prod)=> prod.id !== id)
        setCart(cartFiltered)
    };
    
    const clear = () => {
        setCart([])
    };
    
    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };
    
    const addQty = (item, qty) => {
        const updateCart = cart.map((prod)=>prod.id === item.id ? {...prod, qty} : prod);
        setCart(updateCart);
    };
    
    const getQty = (id) => {
        const product = cart.find((prod) => prod.id === id)
        return product?.qty
    };
    
    const totalPrice = () => {
        let total = 0
        cart.forEach((prod)=> {
            total += prod.price * prod.qty
        })
        return total;
    };
    
    const totalQty = () => {
        let total = 0
        cart.forEach((prod)=> {
            total += prod.qty
        })
        return total;
    };
    
    return (
        <CartContext.Provider 
        value={
            {cart,
            addItem,
            removeItem,
            clear,
            isInCart,
            getQty,
            totalPrice,
            totalQty
            }}>
                
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;