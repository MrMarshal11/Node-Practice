import express from "express";
import renderCreateMessage from "../controllers/createMessageController.js";

const createMessageRouter = express.Router();

createMessageRouter.get("/", renderCreateMessage);

export default createMessageRouter