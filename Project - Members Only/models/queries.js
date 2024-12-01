import pool from "../db/pool.js";

async function getMessages() {
    try {
        const {rows} = await pool.query('SELECT * FROM messages');
        await console.log(rows);
        return rows;
    } catch (error) {
        console.log(`error at getMessages(), ${error}`)
    }
}

export default {getMessages};