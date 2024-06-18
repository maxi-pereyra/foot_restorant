import { Request , Response } from "express" 
import Users from '../models/modelUsers'
import "dotenv/config";


export const getAllUsers = async (req: Request , res: Response) => {
    
    const users = await Users.find({});
    
    if(!users) return res.status(404).json('No user found')
    
    const usersAll = users.map(user => {
       return{
           name:user.name,
           email: user.email,
           adress: user.adress,
       }
    })
    
    res.json(usersAll)

}

export const getuser = async (res: Response , req: Request) => {

    const user = await Users.findById(req.userId , {password: 0})

    if(!user) return res.status(404).json('No user found')
    
    res.json(user)
}


export const editUser = async (res: Response , req: Request) => {

    const {name , email, adress, city} = req.body;

    const user = await Users.findByIdAndUpdate(req.userId , {name: name , email: email , adress: adress , city: city})

    if(!user) return res.status(404).json('No midified user')
    
    res.json(user)
}

//router.delete('/user',TokenValidation,checkRoleAuth(['user']))
export const deleteUser = async (req: Request , res: Response) => {

    const user = await Users.findByIdAndDelete(req.userId)

    if(!user) return res.status(404).json('No midified user')
    
    res.json(user)

}
