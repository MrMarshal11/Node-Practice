import pool from "./pool.js";

async function newMessage(text, username, added) {
    try {
        await pool.query(`INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)`, [text, username, added]);
        console.log('inserted new message.');
    } catch (error) {
        console.log('In newMessage()');
        console.log(error);
    }
}

async function showMessages() {
    try {
        const {rows} = await pool.query(`SELECT * FROM messages`);
        return rows;
    } catch (error) {
        console.log('In showMessages()');
        console.log(error);
    }
}

export default {newMessage, showMessages};