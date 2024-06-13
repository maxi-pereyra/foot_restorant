import { validationResult } from 'express-validator'
import { Request, Response, NextFunction} from 'express'



export const validaResult = (req: Request, res: Response, next: NextFunction) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error: any) {
        res.status(403).send({ error: error.mapped()})
    }
}

module.exports = {validaResult}