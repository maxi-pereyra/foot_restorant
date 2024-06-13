import Users from "../models/modelUsers";
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv'

interface payloadInterface {
    _id: string,
    iat: number,
    exp: number
}

export const checkRoleAuth = (roles: string[]) => async (req: Request , res: Response , next: NextFunction) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).json('Access denied')
    
        const payload = jwt.verify(token, process.env.TOKEN || 'tokentest' ) as payloadInterface;
        const userData = await Users.findById(payload._id , {password: 0}) 
        
        if (userData && [...roles].includes(userData.role)) { //TODO:
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }
}

module.exports = {
    checkRoleAuth
}