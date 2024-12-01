import pool from "../db/pool.js";

async function getMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.log(`error at getMessages(), ${error}`);
  }
}

// Insert collected sign up details to db.
async function signUpPOST(firstName, lastName, username, hashedPassword) {
  try {
    await pool.query(
      "INSERT INTO users (firstName, lastName, username, password) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, username, hashedPassword]
    );
  } catch (error) {
    console.log(`error at signUpPOST(), ${error}`);
  }
}

export default { getMessages, signUpPOST };
