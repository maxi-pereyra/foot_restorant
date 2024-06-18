import { check } from 'express-validator'
import { Request, Response, NextFunction} from 'express'
import {validaResult} from '../libs/validateHelper'

export const validateCreate = [
    check('name')
    .exists()
    .notEmpty(),
    check('email')
    .exists()
    .isEmail(), 
    check('adress')
    .exists(),
    check('city')
    .exists(),
    check('password')
    .exists(),
    (req: Request ,res: Response , next: NextFunction)=>{
        validaResult(req,res,next)
    }
];

module.exports = { validateCreate }
