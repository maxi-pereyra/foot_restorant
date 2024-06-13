import mongoose from "mongoose";
import { Document } from "mongodb";
import bcrypt from 'bcryptjs'

export interface InterfaceUser extends Document {
    name: string,
    email: string,
    adress: string,
    city: string,
    password:string,
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
        }
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

const Users = mongoose.model<InterfaceUser>('User', UsersSchema);

export default Users