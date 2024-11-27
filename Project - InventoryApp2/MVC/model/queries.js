import pool from "../../db/pool.js";

async function getTrainers() {
  try {
    const { rows } = await pool.query("SELECT trainer_name FROM trainers;");
    return rows;
  } catch (error) {
    console.log("error at getTrainers()");
    console.log(error);
  }
}

async function getTeam(trainerName) {
  try {
    const query = `SELECT
            trainers.trainer_name AS trainer,
            pokemon.name AS pokemon
            FROM trainers
            LEFT JOIN trainers_pokemon
            ON trainers.id = trainers_pokemon.trainer_id
            LEFT JOIN pokemon
            ON trainers_pokemon.pokemon_id = pokemon.id
            WHERE trainer = $1;`;
    const { rows } = await pool.query(query, [trainerName]);
    return rows;
  } catch (error) {
    console.log("error at getTeam()");
    console.log(error);
  }
}

export default { getTrainers, getTeam };
