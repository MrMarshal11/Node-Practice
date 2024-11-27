import model from "../model/queries.js";

function newPokemonFormRender(req, res) {
    res.render("newPokemonForm");
} 

function newTrainerFormRender(req, res) {
    res.render("newTrainerForm");
} 

function insertNewTrainer(req, res) {
    const { trainer } = req.body;
    model.postNewTrainer(trainer);
    res.redirect("/trainers");
}

export default {newPokemonFormRender, newTrainerFormRender, insertNewTrainer};