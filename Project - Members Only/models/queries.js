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
      "INSERT INTO users (firstName, lastName, username, password, membership_status) VALUES ($1, $2, $3, $4, $5)",
      [firstName, lastName, username, hashedPassword, 'member']
    );
  } catch (error) {
    console.log(`error at signUpPOST(), ${error}`);
  }
}

async function deleteMessageQuery(id) {
  try {
    await pool.query("Delete FROM messages WHERE id = $1", [id]);
  } catch (error) {
    console.log(`error at deleteMessageQuery(), ${error}`);
  }
}

async function createMessageQuery(firstname, lastname, title, message, date_added, user_id) {
  try {
    await pool.query("INSERT INTO messages (firstname, lastname, title, message, date_added, user_id) VALUES ($1, $2, $3, $4, $5, $6)", 
      [firstname, lastname, title, message, date_added, user_id]);
  } catch (error) {
    console.log(`error at createMessageQuery(), ${error}`);
  }
}

async function becomeAdminQuery(user_id) {
  try {
    await pool.query("UPDATE users SET membership_status = 'admin' WHERE id = $1", [user_id])
  } catch (error) {
    console.log(`error at becomeAdminQuery(), ${error}`)
  }
}


export default { getMessages, 
  signUpPOST, 
  deleteMessageQuery,
  createMessageQuery,
  becomeAdminQuery };
