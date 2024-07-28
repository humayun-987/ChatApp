import express from "express"
import protectRoute from "../middlewares/protectRoute.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
const router = express.Router()

// to get messages between the two user
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);// check whether the user is logged in or not

export default router;