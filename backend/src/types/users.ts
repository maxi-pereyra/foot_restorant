import { Types } from "mongoose";
import { Document } from "mongodb";


export interface UserInterface extends Document{
    _id: string,
    auth0Id: string,
    name: string,
    email: string,
    adresslineal: string,
    city: string,
    password: string,
    role: string,
    orders: Types.ObjectId[],
}

