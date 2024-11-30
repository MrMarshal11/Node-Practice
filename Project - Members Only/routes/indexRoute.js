import express from "express";
import indexRender from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get('/', indexRender);

export default indexRouter;