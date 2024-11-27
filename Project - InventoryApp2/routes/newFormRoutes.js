import express from 'express';
import newForm from '../MVC/controllers/newFormControllers.js';

const newPokemonFormRoute = express.Router();
const newTrainerFormRoute = express.Router();

newTrainerFormRoute.get("/", newForm.newTrainerFormRender);
newTrainerFormRoute.post("/", newForm.insertNewTrainer);

newPokemonFormRoute.get("/:trainer", newForm.newPokemonFormRender);
newPokemonFormRoute.post("/:trainer", newForm.insertNewPokemon);

export default {newPokemonFormRoute, newTrainerFormRoute};