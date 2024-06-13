import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv'

interface payloadInterface {
    _id: string,
    iat: number,
    exp: number
}
export const TokenValidation = (req: Request , res: Response , next: NextFunction) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).json('Access denied')

    const payload = jwt.verify(token, process.env.TOKEN || 'tokentest' ) as payloadInterface;
    
    //como agregar o extender una interface en este caso Request , ==> strict: true
    req.userId = payload._id;

    next()
}