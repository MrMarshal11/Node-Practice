import express from 'express';
import indexController from '../controllers/indexController.js';

const indexRoute = express.Router();

indexRoute.get("/", indexController.initialRender);

export default indexRoute;