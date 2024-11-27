import model from "../model/queries.js";

async function newPokemonFormRender(req, res) {
    const { trainer } = req.params;
    await res.render("newPokemonForm", {trainer});
} 

function newTrainerFormRender(req, res) {
    res.render("newTrainerForm");
} 

function insertNewTrainer(req, res) {
    const { trainer } = req.body;
    model.postNewTrainer(trainer);
    res.redirect("/trainers");
}

async function insertNewPokemon(req, res) {
    try {
        const { trainer } = req.params;
        const { pokemon } = req.body;
        model.postNewPokemon(pokemon, trainer);
        res.redirect(`/team/${trainer}`);    
    } catch (error) {
        console.log('error at insertNewPokemon()', error);
    }
}

export default {newPokemonFormRender, newTrainerFormRender, insertNewTrainer, insertNewPokemon};