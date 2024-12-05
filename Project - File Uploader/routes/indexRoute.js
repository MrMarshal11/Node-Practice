import express from "express";
import controller from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get("/", controller.renderIndex);
indexRouter.get("/login", controller.renderLogin);
indexRouter.get("/signUp", controller.renderSignUp);
indexRouter.get("/uploadFile", controller.renderUploadFile);

indexRouter.post("/login", controller.verifyLogin);
indexRouter.post("/signUp", controller.signUpComplete);
indexRouter.post("/uploadFile", controller.postUploadedFiles);

export default indexRouter;
