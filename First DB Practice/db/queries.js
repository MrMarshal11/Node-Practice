import pool from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchName(name) {
  const result = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1 OR username ILIKE $2 OR username ILIKE $3", 
  [`%${name}%`, `${name}%`, `%${name}`]);
  return result.rows;
}

export default { getAllUsernames, insertUsername, searchName };

// Add search functionality via query parameters on the index route. For example, GET /?search=sup should return all usernames containing sup. DON’T implement this in JavaScript, search should be done in SQL.
// Add a new route GET /delete to delete all usernames from the db.