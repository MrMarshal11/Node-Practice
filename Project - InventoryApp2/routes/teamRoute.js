import express from "express";
import renderTeam from "../MVC/controllers/teamController.js"

const teamRouter = express.Router();

teamRouter.get("/:trainerName", renderTeam);

export default teamRouter;