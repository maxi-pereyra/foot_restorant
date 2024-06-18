import mongoose from "mongoose";
import { InterfaceProducts } from "types/products";

const ProductsSchema = new mongoose.Schema(
    {
      
        name:{
            type: String,
            require:true,
            min:4,
            lowercase: true
        },
        description:{
            type: String,
            require:true,
            lowercase: true
        },
        image:{
            type: String,
            lowercase:true
        },
        price:{
            type: String,
            lowercase:true
        },
        category:{
            type: String,
            lowercase:true
        },
        units:{
            type: Number,
            lowercase:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Products = mongoose.model<InterfaceProducts>('Products', ProductsSchema);

export default Products