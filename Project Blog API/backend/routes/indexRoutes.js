import express from "express";
import controller from "../controllers/indexControllers.js";

const indexRouter = express.Router();

indexRouter.post("/signIn", controller.signUp);

export default indexRouter;
