import express from "express";
import ComentarioController from "./comentario.controller.js";

const router = express.Router();

router.post("/", ComentarioController.createComentario);

export default router;
