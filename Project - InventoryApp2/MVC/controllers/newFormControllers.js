function newPokemonFormRender(req, res) {
    res.render("newPokemonForm");
} 

function newTrainerFormRender(req, res) {
    res.render("newTrainerForm");
} 

export default {newPokemonFormRender, newTrainerFormRender};