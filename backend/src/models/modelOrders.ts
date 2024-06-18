import mongoose, { Schema } from "mongoose";

const orderItemSchema = new mongoose.Schema({
  
    productsId:[{
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }],
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    price:{ 
        type: Number,
    },
    state:{
        type: String,
        default: 'espera a confirmar'
    }
})

//se suele usar una Lamba para normalizar viejos datos si existe un cambio en el modelo para que no queden deprecados
const Order = mongoose.model("OrderItem" , orderItemSchema)

export default Order