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

async function postNewTrainer(trainer) {
  await pool.query('INSERT INTO trainers (trainer_name) VALUES ($1)', [trainer])
}

async function postNewPokemon(pokemon, trainer) {
  try {
    await pool.query('INSERT INTO pokemon (name, trainer) VALUES ($1, $2)', [pokemon, trainer]);
    const pokemonResult = await pool.query('SELECT id FROM pokemon WHERE name = $1 AND trainer = $2', [pokemon, trainer]);

    if (pokemonResult.rows.length === 0) {
      throw new Error('Failed to retrieve the new Pokémon ID');
    }
    const pokemon_id = pokemonResult.rows[0].id;

    const trainerResult = await pool.query('SELECT id FROM trainers WHERE trainer_name = $1', [trainer]);

    if (trainerResult.rows.length === 0) {
      throw new Error('Trainer not found');
    }
    const trainer_id = trainerResult.rows[0].id;
    
    await pool.query('INSERT INTO trainers_pokemon (trainer_id, pokemon_id) VALUES ($1, $2)', [trainer_id, pokemon_id]);

    console.log(`Successfully added ${pokemon} for trainer ${trainer}`);
  } catch (error) {
    console.log('error at postNewPokemon()', error);
  }
}

export default { getTrainers, getTeam, postNewTrainer, postNewPokemon };
