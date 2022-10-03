import { Router } from "express";
import ContactController from "../controllers/contactController.js";
const router = Router();

router.get("/api/get", ContactController.ShowAllContact);

export default router;
