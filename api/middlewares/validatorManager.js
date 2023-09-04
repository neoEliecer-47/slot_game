//validate request body
import { validationResult, body, param } from 'express-validator'


export const validarResultExpress = (req, res, next) => {
    
    const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()})
        next()//go on to the register of the player
}

//PlXuvzwF75vaqvZU
export const bodyPlayerValidator = () => [
    body("name", "incorrect name format", ).trim().isString(),
    validarResultExpress
]