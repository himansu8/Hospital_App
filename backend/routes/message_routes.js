import express from "express"
import { getAllMessage, sendMessage } from "../controllers/message_controller.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";



const router = express.Router()


router.post("/send",sendMessage)
router.get("/getall",verifyAdmin,getAllMessage)

export default router;