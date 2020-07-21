import express from "express";
import * as ArmorsController from "../controllers/armorsController";
const router = express.Router();

router.get("/armors", ArmorsController.getAllArmors);

export default router;