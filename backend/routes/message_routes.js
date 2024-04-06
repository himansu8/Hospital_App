import express from "express"
import { getAllMessage, sendMessage } from "../controllers/message_controller.js";



const router = express.Router()


router.post("/send",sendMessage)
router.get("/getall",getAllMessage)

export default router;