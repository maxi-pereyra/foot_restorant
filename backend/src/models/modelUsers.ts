import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        authOId:{
            type:String,
            require:true
        },
        name:{
            type:String,
        },
        email:{
            type:String,
            require:true
        },
        adresslineal:{
            type: String,
        },
        city:{
            type: String,
        },
        country:{
            type: String,
        }
    }
)

const Users = mongoose.model('User', UsersSchema);

module.exports = {Users}