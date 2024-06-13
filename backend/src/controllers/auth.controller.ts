import { Request , Response } from "express" 
import jwt from 'jsonwebtoken';
import Users, {InterfaceUser} from '../models/modelUsers'
import "dotenv/config";

export const signIn = async (req: Request , res: Response) => {
    const user = req.body

    const userFind = await Users.findOne({email: user.email})
    if(!userFind) return res.status(400).json('email no encontrado')

    const correctPassword: boolean = await userFind.validatePassword(user.password);
    if(!correctPassword) return res.status(400).json('invalid password')

    const token: string = jwt.sign({_id: userFind._id}, process.env.TOKEN || 'tokentest' ,{
        expiresIn: 60 * 60 * 24
    } )

    res.status(200).header('auth-token',token).json(userFind)
}

export const signUp = async (req: Request , res: Response) => {
    const user = req.body;
    console.log(user)

    const newUser: InterfaceUser = new Users({
        name: user.name,
        email: user.email,
        adress: user.adress,
        city: user.city,
        password: user.password,
        role: user.role
    })

    newUser.password = await newUser.encryptPassword(newUser.password)
    const savedUser = await newUser.save();

    // token
    const token = jwt.sign({_id: savedUser._id }, process.env.TOKEN || 'tokentest')


    res.header('auth-token',token).json(savedUser)
}

export const profile = async (req: Request , res: Response) => {
    
    const user = await Users.findById(req.userId , {password: 0});

    if(!user) return res.status(404).json('No user found')
    
    res.json(user)
}