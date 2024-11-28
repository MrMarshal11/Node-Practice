import model from "../model/queries.js"

async function renderTeam(req, res) {
    try {
        const {trainerName} = req.params;
        const team = await model.getTeam(trainerName);
        res.render("team", {team, trainerName, deletePokemon});
    } catch (error) {
        console.log('error at renderTeam()', error);
        res.status(500).send('Server side error...');
    }
} 

async function deletePokemon(req, res) {
    try {
        const { trainerName } = req.params;
        const { pokemonName } = req.body;
        await model.deletePokemonQuery(pokemonName, trainerName);
        res.redirect(`/team/${trainerName}`);
    } catch (error) {
        console.log('error at deletePokemon()', error);
    }
}

export default {renderTeam, deletePokemon};