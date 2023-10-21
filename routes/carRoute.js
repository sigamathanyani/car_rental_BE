import express from "express";
import { allCars, createCar, deleteCar, editCar, getCar } from "../controllers/carController.js";
import { addRev, deleteRev, editRev, getRev, getRevs } from "../controllers/reviewController.js";

const router = express.Router();

//CAR FUNCTIONS
router.get("/",allCars);
router.post("/create-car",createCar);
router.get("/:carID", getCar);
router.delete("/:carID", deleteCar);
router.put("/:carID", editCar);

// CAR REVIEW
router.get("/:carID/reviews",getRevs);
router.post("/:carID/add-rev",addRev);
router.get("/:carID/reviews/:revID",getRev);
router.put("/:carID/reviews/:revID",editRev);
router.delete("/:carID/reviews/:revID",deleteRev);

export default router;