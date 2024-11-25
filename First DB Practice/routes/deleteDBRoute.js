import express from "express";
import deleteDB from "../controllers/deleteDBController.js";

const deleteDBRoute = express.Router();

deleteDBRoute.get("/", deleteDB);

export default deleteDBRoute;