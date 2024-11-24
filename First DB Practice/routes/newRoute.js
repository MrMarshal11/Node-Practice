import express from "express";
import newController from "../controllers/newController.js";

const newRoute = express.Router();

newRoute.get("/", newController.renderForm);
newRoute.post("/", newController.postForm);

export default newRoute;