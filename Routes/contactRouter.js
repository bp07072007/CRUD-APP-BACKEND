import { Router } from "express";
import ContactController from "../controllers/contactController.js";
const router = Router();

router.post("/api/post", ContactController.AddContact);
router.get("/api/get", ContactController.ShowAllContact);
router.get("/api/get/:id", ContactController.ShowSingleContact);
router.put("/api/update/:id", ContactController.UpdateContact);
router.delete("/api/remove/:id", ContactController.DeleteContact);

export default router;
