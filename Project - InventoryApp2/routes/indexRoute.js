import express from "express";
import initialRender from "../MVC/controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get("/", initialRender);

export default indexRouter;