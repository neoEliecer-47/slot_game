//validate request body
import { validationResult, body, check } from "express-validator";

export const validateResultExpress = (req, res, next) => {
  const errors = validationResult(req);
  console.log("entro aqui");
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next(); //go on to the player register
};

export const bodyPlayerValidator = [
  //validate body
  body("player", "incorrect player name format").trim().notEmpty().isString(),
  body("gameType", "incorrect game type format").trim().notEmpty().isString(),

  validateResultExpress,
];
