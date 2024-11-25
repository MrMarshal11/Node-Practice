import express from 'express';
import trainersRender from "../controllers/trainersController.js"

const trainersRoute = express.Router();

trainersRoute.get("/", trainersRender)

export default trainersRoute;