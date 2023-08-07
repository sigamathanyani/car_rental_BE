import express from "express"
import { authenticatedUser } from "../middlewares/authMiddleware.js";
import { allCars, createCar } from "../controllers/carController.js";

const router = express.Router();

router.get("/",authenticatedUser,allCars);
router.post("/create-car",createCar);

export default router;