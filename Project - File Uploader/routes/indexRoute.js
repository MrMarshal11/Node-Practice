import express from "express";
import controller from "../controllers/indexController.js"

const indexRouter = express.Router();

indexRouter.get("/", controller.renderIndex);

export default indexRouter;