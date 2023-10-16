import express from "express"
import { authenticatedUser } from "../middlewares/authMiddleware.js";
import { allCars, createCar, deleteCar, editCar, getCar } from "../controllers/carController.js";

const router = express.Router();

router.get("/",authenticatedUser,allCars);
router.post("/create-car",authenticatedUser,createCar);
router.get("/:carID", authenticatedUser, getCar);
router.delete("/:carID", authenticatedUser, deleteCar);
router.put("/:carID", authenticatedUser, editCar);

export default router;