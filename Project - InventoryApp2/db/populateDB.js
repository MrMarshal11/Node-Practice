import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Client } = pkg;

const SQL = `-- Create the tables
CREATE TABLE IF NOT EXISTS trainers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trainer_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS pokemon (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  trainer VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS trainers_pokemon (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trainer_id INTEGER REFERENCES trainers(id) ON DELETE CASCADE,
  pokemon_id INTEGER REFERENCES pokemon(id) ON DELETE CASCADE
);

-- Insert initial values into trainers
INSERT INTO trainers (trainer_name) VALUES 
  ('Aazuri'),
  ('Timaro'),
  ('Jenma');

-- Insert initial values into pokemon
INSERT INTO pokemon (name, trainer) VALUES 
  ('magneton', 'jim'),
  ('ampharos', 'jim'),
  ('pikachu', 'bo'),
  ('groudon', 'amp'),
  ('piplup', 'bo'),
  ('regigigas', 'jim'),
  ('kingdra', 'jim'),
  ('onix', 'bo');

-- Insert initial values into trainers_pokemon
INSERT INTO trainers_pokemon (trainer_id, pokemon_id) VALUES 
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (2, 5),
  (1, 6),
  (1, 7),
  (2, 8);

-- Verify the data
SELECT * FROM trainers;
SELECT * FROM pokemon;
SELECT * FROM trainers_pokemon;`;

async function populateDB() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

populateDB();