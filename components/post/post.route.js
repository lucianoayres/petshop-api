import express from "express";
import PostController from "../post/post.controller.js";

const router = express.Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);

export default router;
