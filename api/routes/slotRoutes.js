import { Router } from 'express'
import { slotMachine , playerAndSlotGame} from '../controllers/slotControllers.js'

const router = Router()

router.get("/", slotMachine)
router.post("/", playerAndSlotGame)

export default router