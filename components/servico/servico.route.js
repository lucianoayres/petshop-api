import express from "express";
import ServicoController from "../servico/servico.controller.js";

const router = express.Router();

router.post("/", ServicoController.createServico);
router.put("/", ServicoController.updateServico);
router.delete("/:id", ServicoController.deleteServico);
router.get("/", ServicoController.getServicos);
router.get("/:id", ServicoController.getServico);

export default router;
