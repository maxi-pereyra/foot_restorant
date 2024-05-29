import { UserInterface } from "../types/users"
import Users from "../models/modelUsers"

export const createCurrentUser = async (user: UserInterface) => {
    const existingUser = await Users.findOne(user)
    if(existingUser) return "existe"

    const newUser = new Users(user);
    const saveUser = await newUser.save();

    if(!saveUser) throw Error (" no se guardo usuario correctamente ")
    return saveUser;
}

export const getUserId = async (userid: string) => {
    const user = await Users.findOne({_id: userid})
    if(!user) throw new Error("user not found")
        return user
    }

export const upDateUserControll = async (_id: string ,email: string , name: string , adresslineal: string , city: string) => {
    
    const user = await Users.findById({_id: _id});
    if (!user) throw new Error(" user not found") 
        
    user.name = name;
    user.email = email;
    user.adresslineal = adresslineal;
    user.city = city;

    const response = await user.save();

    if(!response) throw new Error("error user not update")
     else return response
}

module.exports = { 
    createCurrentUser,
    getUserId
}