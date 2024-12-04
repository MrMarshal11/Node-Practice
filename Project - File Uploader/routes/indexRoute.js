import express from "express";
import controller from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get("/", controller.renderIndex);
indexRouter.get("/login", controller.renderLogin);
indexRouter.get("/signUp", controller.renderSignUp);

indexRouter.post("/login", controller.renderLogin);
indexRouter.post("/signUp", controller.signUpComplete);

export default indexRouter;
