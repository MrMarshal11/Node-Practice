#! /usr/bin/env node

import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

const SQL = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    firstName VARCHAR ( 255 ),
    lastName VARCHAR ( 255 ),
    username VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    membership_status VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    firstName VARCHAR ( 255 ),
    lastName VARCHAR ( 255 ),
    title VARCHAR ( 255 ) NOT NULL,
    message TEXT NOT NULL,
    date_added DATE DEFAULT CURRENT_DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

INSERT INTO users (firstName, lastName, username, password, membership_status) VALUES 
    ('Jim', 'Bo', 'jimbo@gmail.com', 'jimbo', 'member'),
    ('Jak', 'Snow', 'jaksnow@gmail.com', 'jaksnow', 'admin');
    

INSERT INTO messages (firstName, lastName, title, message, date_added, user_id) VALUES 
    ('Jim', 
    'Bo', 
    'Healthy Dinner', 
    'Got a nice meal today, with some delicious chicken, rice & broccoli!', 
    CURRENT_DATE, 
    1), 
    ('Jak', 
    'Snow', 
    'Lost my goose', 
    'I don''t know what happened but she''s gone and I''m worried...', 
    CURRENT_DATE, 
    2);
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
