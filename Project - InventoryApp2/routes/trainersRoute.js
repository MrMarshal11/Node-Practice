import express from "express";
import renderTrainers from "../MVC/controllers/trainersController.js";

const trainersRouter = express.Router();

trainersRouter.get("/", renderTrainers);

export default trainersRouter;