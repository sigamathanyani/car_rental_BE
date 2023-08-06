import express from "express"
import { authenticatedUser } from "../middlewares/authMiddleware.js";
import { allCars } from "../controllers/carController.js";

const router = express.Router();

router.get("/",authenticatedUser,allCars);

export default router;