import express from 'express';
import newForm from '../MVC/controllers/newFormControllers.js';

const newPokemonFormRoute = express.Router();
const newTrainerFormRoute = express.Router();

newTrainerFormRoute.get("/", newForm.newTrainerFormRender);
newPokemonFormRoute.get("/", newForm.newPokemonFormRender);

export default {newPokemonFormRoute, newTrainerFormRoute};