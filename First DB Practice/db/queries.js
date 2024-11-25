import pool from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export default { getAllUsernames, insertUsername };

// Add search functionality via query parameters on the index route. For example, GET /?search=sup should return all usernames containing sup. DON’T implement this in JavaScript, search should be done in SQL.
// Add a new route GET /delete to delete all usernames from the db.