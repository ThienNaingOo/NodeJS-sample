import express from "express";
import { createPost, getPosts } from "../controllers/PostController.js";

const postRouter = express.Router();

postRouter.route('/')
    .get(getPosts)
    .post(createPost)

export default postRouter