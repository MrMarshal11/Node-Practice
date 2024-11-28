import express from "express";
import controller from "../MVC/controllers/trainersController.js";

const trainersRouter = express.Router();

trainersRouter.get("/", controller.renderTrainers);
trainersRouter.post("/", controller.deleteTrainer);

export default trainersRouter;