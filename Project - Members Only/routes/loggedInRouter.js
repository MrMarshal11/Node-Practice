import express from "express";
import controller from "../controllers/clubPageController.js"

const loggedInRouter = express.Router();

loggedInRouter.get("/", controller.indexRenderUser);

export default loggedInRouter;