
import { Document } from "mongodb";
import { Types } from "mongoose";

export interface InterfaceProducts extends Document {
    name: string,
    description: string,
    image:string,
    price: number,
    category: string,
    units: number
}

export interface InterfaceOrder extends Document {
    productsId: Types.ObjectId[],
    userId?: Types.ObjectId | null,
    price?: number | null,
    state?: string,
}