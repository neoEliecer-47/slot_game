import { Router } from "express";
import {
  slotMachine,
  playerAndSlotGame,
  playersAndTheirFavoriteGame,
} from "../controllers/slotControllers.js";
import { bodyPlayerValidator } from "../middlewares/validatorManager.js";

const router = Router();

//GET           /api/v1/slot           slot machine game
//GET           /api/v1/players      all players
//POST          /api/v1/slot        create player

router.get("/", slotMachine);
router.get("/players", playersAndTheirFavoriteGame);
router.post("/", bodyPlayerValidator, playerAndSlotGame); //the middleware 'bodyPlayerValidator' validates the request body

export default router;
