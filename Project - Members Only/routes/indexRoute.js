import express from "express";
import indexController from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get('/', indexController.indexRender);
indexRouter.post('/login', indexController.verifyLogin);

indexRouter.get('/signUp', indexController.indexRender);
indexRouter.post('/signUp', indexController.postNewUser);

export default indexRouter;