import pool from "../db/pool.js";

async function displayTrainers() {
  try {
    const { rows } = await pool.query("SELECT trainer FROM trainers");
    return rows;
  } catch (error) {
    console.log("error at displayTrainers()");
    console.log(error);
  }
}

async function displayTeams() {
  try {
    console.log("success");
    // SELECT teams.team_name, pokemon.name
    // FROM teams
    // LEFT JOIN team_pokemon
    // ON teams.id = team_pokemon.team_id
    // LEFT JOIN pokemon
    // ON team_pokemon.pokemon_id = pokemon.id;
  } catch (error) {
    console.log("error in displayTeams()");
    console.log(error);
  }
}

export default {displayTrainers, displayTeams};
