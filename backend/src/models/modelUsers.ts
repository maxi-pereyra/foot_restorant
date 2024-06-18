import mongoose, { Schema } from "mongoose";
import { Document } from "mongodb";
import bcrypt from 'bcryptjs'

export interface InterfaceUser extends Document {
    name: string,
    email: string,
    adress: string,
    city: string,
    password:string,
    role:string,
    encryptPassword(password: string): Promise<string>,
    validatePassword(password: string): Promise<boolean>
}
const UsersSchema = new mongoose.Schema(
    {
        auth0Id:{
            type: String,
            require:true
        },
        name:{
            type: String,
            require:true,
            min:4,
            lowercase: true
        },
        email:{
            type: String,
            unique: true,
            require:true,
            lowercase: true
        },
        adress:{
            type: String,
            unique:true,
            lowercase:true
        },
        city:{
            type: String,
            lowercase:true
        },
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            default: 'user'
        },
        orders:[{
         type: Schema.Types.ObjectId, 
         ref: 'Order'    
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

UsersSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

UsersSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);

}

UsersSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
        delete returnedObject.password
    }
})

const Users = mongoose.model<InterfaceUser>('User', UsersSchema);

export default Users