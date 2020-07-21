import express from "express";
import * as WeaponsController from "../controllers/weaponsController";
const router = express.Router();

router.get("/weapons", WeaponsController.getAllWeapons);

export default router;
