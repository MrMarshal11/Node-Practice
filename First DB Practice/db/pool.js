import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg; // Destructure Pool from the default import

const pool = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
});

export default pool;