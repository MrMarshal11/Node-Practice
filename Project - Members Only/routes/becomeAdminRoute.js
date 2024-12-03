import express from "express";
import controller from "../controllers/becomeAdminController.js";

const becomeAdminRouter = express.Router();

becomeAdminRouter.get("/", controller.renderBecomeAdmin);
becomeAdminRouter.post("/", controller.successToAdmin);

export default becomeAdminRouter;
