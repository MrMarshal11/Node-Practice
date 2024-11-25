import express from 'express';
import teamRender from "../controllers/teamController.js"

const teamRoute = express.Router();

teamRoute.get("/", teamRender)

export default teamRoute;