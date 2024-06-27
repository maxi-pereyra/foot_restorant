/// <reference types="vite/client" />

export interface InterfaceProducts {
    name: string,
    description: string,
    image:string,
    price: number,
    category: string,
    units: number
}

export type productCart = {
    product: InterfaceProducts
    quantity: number
}

/* export interface Cart {
    products: productCart[]
} */