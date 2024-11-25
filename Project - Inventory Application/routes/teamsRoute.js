import express from 'express';
import teamsRender from "../controllers/teamsController.js"

const teamsRoute = express.Router();

teamsRoute.get("/", teamsRender)

export default teamsRoute;