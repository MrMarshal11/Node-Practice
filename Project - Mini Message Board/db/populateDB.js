#! /usr/bin/env node

import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added DATE 
);

INSERT INTO messages (text, username, added) 
VALUES
    ('Hi there!', 'Amando', CURRENT_DATE),
    ('Hello World!', 'Charles', CURRENT_DATE),
    ('Keep pushing forward!', 'Samantha', CURRENT_DATE),
    ('The sky''s the limit.', 'Jordan', CURRENT_DATE),
    ('Dream big, work hard.', 'Taylor', CURRENT_DATE);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();