import { useContext } from "react";
import {CartContext} from "../context/cartContext"

export const useCart = () => {
    const { addProduct , cartState} = useContext( CartContext )

    return {
        cart: cartState,
        addProduct
    }
}