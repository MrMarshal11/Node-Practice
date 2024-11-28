import model from "../model/queries.js"
import fetchPokemonData from "../../APIs/fetchDynamicPokemon.js";

async function renderTeam(req, res) {
    try {
        const {trainerName} = req.params;
        const team = await model.getTeam(trainerName);

    // Fetch images for each Pokémon in the team
    const teamWithImages = await Promise.all(
        team.map(async (obj) => {
          const pokemonName = obj.pokemon.toLowerCase(); // Ensure lowercase
          const imgUrl = await fetchPokemonData(pokemonName);
          return { ...obj, imgUrl };
        })
      );  

      res.render("team", { team: teamWithImages, trainerName });    } catch (error) {
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