import express from "express";
import { adminLogin } from "../controllers/login.controller.js";
const router = express.Router();

//Auth Routes
router.post('/login', adminLogin);

export default router;