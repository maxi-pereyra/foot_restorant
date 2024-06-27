import { useReducer } from "react";

import { CartContext } from "./cartContext"; 
import { productCart } from "@/vite-env";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE: productCart[] = []

interface props {
    children: JSX.Element | JSX.Element[]
}


export const CartProvider = ({children}: props) => {

    const [cartState , dispatch] = useReducer(cartReducer,INITIAL_STATE);

     const addProduct = ( product: productCart ) => {
        dispatch({ type: 'addProduct', payload: product })
    } 

    return(
        <CartContext.Provider value={{
            cartState,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}