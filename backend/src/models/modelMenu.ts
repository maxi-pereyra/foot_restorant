import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    _Id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        default: () => new mongoose.Types.ObjectId()
    },
    name:{
        type: String,
        reuqired: true
    },
    price:{ 
        type: Number,
        required: true
    },
    description:{ type: String , required: true},
    category:{type: String , requires: true},
    ingredients:{type: String , required: false},
})

const MenuItem = mongoose.model("MenuItem" , menuItemSchema)

module.exports = { MenuItem }