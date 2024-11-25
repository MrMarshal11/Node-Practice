import express from 'express';
import formRenders from "../controllers/newFormControllers.js"

const newTeamFormRoute = express.Router();
const newTrainerFormRoute = express.Router();

newTrainerFormRoute.get("/", formRenders.newTrainerFormRender);
newTeamFormRoute.get("/", formRenders.newTeamFormRender);

export default {newTeamFormRoute, newTrainerFormRoute};