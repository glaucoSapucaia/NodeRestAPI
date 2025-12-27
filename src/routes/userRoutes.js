import { Router } from "express";
import userController from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddleware";

const router = new Router();
router.get("/", authMiddleware, userController.index);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
