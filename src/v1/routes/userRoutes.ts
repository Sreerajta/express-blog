import express, {Request, Response,Router } from "express";
import userController from "../controllers/userController"
const router:Router = express.Router();
const userControllerInstance = new userController() 
router.get("/", userControllerInstance.getAllUsers);

router.get("/:userId", userControllerInstance.getOneUser);

router.post("/", userControllerInstance.createNewUser);

router.patch("/:userId", userControllerInstance.updateOneUser);

router.delete("/:userId", userControllerInstance.deleteOneUser);

export default router;