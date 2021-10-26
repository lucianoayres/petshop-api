import express from "express";
import AnimalController from "../animal/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.createAnimal);
router.put("/", AnimalController.updateAnimal);
router.delete("/:id", AnimalController.deleteAnimal);
router.get("/", AnimalController.getAnimais);
router.get("/:id", AnimalController.getAnimal);

export default router;
