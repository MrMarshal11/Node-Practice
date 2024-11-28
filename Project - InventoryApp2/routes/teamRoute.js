import express from "express";
import controller from "../MVC/controllers/teamController.js"

const teamRouter = express.Router();

teamRouter.get("/:trainerName", controller.renderTeam);
teamRouter.post("/:trainerName/delete", controller.deletePokemon);

export default teamRouter;