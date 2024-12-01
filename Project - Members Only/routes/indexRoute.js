import express from "express";
import indexRender from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get('/', indexRender);
indexRouter.get('/signUp', indexRender);

export default indexRouter;