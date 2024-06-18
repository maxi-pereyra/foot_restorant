import { Request , Response } from "express" 
import Products from "../models/modelsproducts";
import { InterfaceProducts } from "types/products";


export const getAllProducts = async (req: Request , res: Response) => {
    
    const products = await Products.find({});
    
    if(!products) return res.status(404).json('No product found')
    
    const productsAll = products.map(product => {
       return{
        name: product.name,
        description: product.description,
        image:product.description,
        price: product.price,
        category: product.category,
        units: product.units
       }
    })
    
    res.send(200).json(productsAll)

}

export const getProduct = async (req: Request , res: Response) => {
    
    const id = req.params;

    const product = await Products.findById(id);
    
    if(!product) return res.status(404).json('No product found')

    res.json(product)

}

export const postProduct = async (req: Request , res: Response) => {
    
    const product = req.body;
    
    try {
        
        if(!product) throw new Error('No product found');
    
        const newProduct: InterfaceProducts = new Products({
            name:product.name,
            description:product.description,
            image:product.image,
            price:product.price,
            category:product.category,
            units:product.units
        })
        const savedProduct = await newProduct.save();
    
        res.json(savedProduct)
        
    } catch (error) {
        console.log(error)
    }

}

export const editProduct = async (req: Request , res: Response) => {
    
    const product = req.body;
    const id = req.params;

    if(!product) return res.status(404).json('No product found');

    const productEdit = await Products.findByIdAndUpdate(id,{
        name:product.name,
        description:product.description,
        image:product.image,
        price:product.price,
        category:product.category,
        units:product.units
    })

    return res.send(200).json(productEdit)

}

export const deleteProduct = async (req: Request , res: Response) => {
    
    const product = req.body;
    const id = req.params;

    if(!product) return res.status(404).json('No product found');

    const productDelete = await Products.findByIdAndDelete(id)

    return res.send(200).json(productDelete)

}