import { createContext } from "react";
import { productCart } from "@/vite-env";

export type CartContextProps = {
    cartState: productCart[];
    addProduct: (product: productCart) => void
}
export const CartContext = createContext<CartContextProps>({} as CartContextProps)

