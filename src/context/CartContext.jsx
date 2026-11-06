import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(productId){
        setCartItems((currentItems) => {
            const existing = currentItems.find((item) => item.id === productId);

            if (existing) {
                return currentItems.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...currentItems, { id: productId, quantity: 1 }];
        });
    }

    return <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>;
}

export function useCart(){
    const context = useContext(CartContext);
    return context;
}
