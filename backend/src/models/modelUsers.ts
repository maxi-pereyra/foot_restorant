import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        auth0Id:{
            type: String,
            require:true
        },
        name:{
            type: String,
        },
        email:{
            type: String,
            require:true
        },
        adresslineal:{
            type: String,
        },
        city:{
            type: String,
        },
    }
)

const Users = mongoose.model('User', UsersSchema);

export default Users