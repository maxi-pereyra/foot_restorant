import {  productCart } from "@/vite-env";

type cartAction = {type: 'addProduct' , payload: productCart };
    
export const cartReducer = (state: productCart[], action: cartAction): productCart[] => {
    switch (action.type){
        case 'addProduct':{
            const newState: productCart[] = [ 
                ...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ]
            return newState
        }
        default:
            return state;
    }
}




