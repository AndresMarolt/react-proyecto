import { createContext, useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";


const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')) || [] );

    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}]);
    }

    const getQuantity = () => {
        let count = 0;
        cart.forEach(prod => {
            count += prod.quantity;
        })
        localStorage.setItem('carrito', JSON.stringify(cart));

        return count;
    }

    const getSubtotal = () => {
        let subtotal = 0;
        cart.forEach(prod => {
            subtotal += prod.quantity * prod.precio 
        });

        return subtotal;
    }

    const removeItem = (itemId) => {
        const products = cart.filter(prod => prod.id !== itemId);
        setCart(products);
    }

    const clearCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }



    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            getSubtotal,
            removeItem,
            clearCart,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;