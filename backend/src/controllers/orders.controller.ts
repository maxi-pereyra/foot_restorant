import { Request , Response } from "express" 
import Products from "models/modelsproducts";
import Order from "../models/modelOrders";
import Users from "models/modelUsers";
import { InterfaceOrder } from "types/products";
import { Types } from "mongoose";

export const postOrder = async (req: Request , res: Response) => {
    const {
        products,
        userId,
        price
    } = req.body

    const user = await Users.findById(userId);

    if(!user) {
        return res.status(400).json({error: "ususario inexistente"})
    }
    const newOrder: InterfaceOrder = new Order({
        productsId: products as Types.ObjectId[],
        userId: userId as Types.ObjectId,
        price: price as number
    })

    try {
        const saveOrder = await newOrder.save()
    
        user.orders = user.orders.concat(saveOrder._id);

        await user.save()

        res.json(saveOrder)
        
    } catch (error) {
        res.status(404).json({error: "error al crear la orden"})
    }

}

export const getOrders = async (req: Request , res: Response) => {
    
    try {
        const orders = await Order.find({});
    
        if(!orders) throw new Error('no se encontraron ordenes');
            
        res.json(orders)

    } catch (error) {
        res.json({error:error})
    }

}

export const getOrderById = async (req:Request , res:Response) => {
    try {
        const id  = req.params
        const order = await Order.findById(id);
    
        if(!order) throw new Error('no se encontraron ordenes');
            
        res.json(order)

    } catch (error) {
        res.json({error:error})
    }
}

export const editOrder =  async (req:Request , res:Response) => {
    try {
        const {
            products,
            userId,
            price
        } = req.body
        const id  = req.params;

        const orderEdit = await Order.findByIdAndUpdate(id,{
            productsId: products as Types.ObjectId[],
            userId: userId as Types.ObjectId,
            price: price as number
        });
    
        if(!orderEdit) throw new Error('no se pudo editar ordenes');
            
        res.json(orderEdit)

    } catch (error) {
        res.json({error:error})
    }
}

export const deleteOrder =  async (req:Request , res:Response) => {
    try {
        const id  = req.params;

        const orderDelete = await Order.findByIdAndDelete(id)
    
        if(!orderDelete) throw new Error('no se pudo eliminar orden');
            
        res.json(orderDelete)

    } catch (error) {
        res.json({error:error})
    }
}