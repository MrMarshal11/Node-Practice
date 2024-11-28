import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Client } = pkg;

const SQL = `
DROP TABLE trainers_pokemon;
DROP TABLE pokemon;
DROP TABLE trainers;
`;

async function deleteDB() {
  console.log("deleting...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

deleteDB();