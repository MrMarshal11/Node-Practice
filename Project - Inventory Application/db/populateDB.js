#! /usr/bin/env node

import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

const SQL = `
CREATE TABLE IF NOT EXISTS trainers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trainer VARCHAR ( 255 ) UNIQUE
);

INSERT INTO trainers (trainer) VALUES 
('Aarune'),
('Katari');

CREATE TABLE IF NOT EXISTS teams (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trainer_id INTEGER REFERENCES trainers(id) ON DELETE CASCADE, 
  team_name VARCHAR ( 255 )
);

INSERT INTO teams (trainer_id, team_name) VALUES 
(1, 'Aarune''s Team 1'),
(1, 'Aarune''s Team 2'),
(2, 'Katari''s Team 1');

CREATE TABLE IF NOT EXISTS pokemon (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) UNIQUE
);

INSERT INTO pokemon (name) VALUES 
('Magneton'),
('Piplup'),
('Ampharos'),
('Groudon'),
('Pikachu'),
('Onix'),
('Kingdra'),
('Celebi'),
('Regigigas');

CREATE TABLE IF NOT EXISTS team_pokemon (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
  pokemon_id INTEGER REFERENCES pokemon(id) ON DELETE CASCADE
);

INSERT INTO team_pokemon (team_id, pokemon_id) VALUES 
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), 
(2, 7), (2, 8), (2, 9), (2, 4), (2, 2), (2, 1), 
(3, 3), (3, 8), (3, 6), (3, 9), (3, 5), (3, 2);
`;

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
