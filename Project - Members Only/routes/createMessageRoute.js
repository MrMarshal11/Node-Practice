import express from "express";
import controller from "../controllers/createMessageController.js";

const createMessageRouter = express.Router();

createMessageRouter.get("/", controller.renderCreateMessage);
createMessageRouter.post("/", controller.createMessage);

export default createMessageRouter