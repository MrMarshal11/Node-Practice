import express from 'express';
import initialRender from '../controllers/indexController.js';

const indexRoute = express.Router();

indexRoute.get("/", initialRender)

export default indexRoute;