import express from 'express';
import newController from '../controllers/newController.js'

const indexRoute = express.Router();

indexRoute.get("/", newController.getUserNames);

export default indexRoute;