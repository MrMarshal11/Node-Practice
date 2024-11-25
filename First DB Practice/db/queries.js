import pool from "./pool.js";

async function getAllUsernames() {
  try {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows; // Return the rows if the query succeeds
  } catch (error) {
    if (error.code === '42P01') {
      // Error code for "relation does not exist" (missing table)
      console.error("Table 'usernames' does not exist.");
    } else {
      console.error("Error fetching usernames:", error);
    }
    return []; // Return an empty array if an error occurs
  }
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchName(name) {
  try {
    const result = await pool.query(
      "SELECT * FROM usernames WHERE username ILIKE $1 OR username ILIKE $2 OR username ILIKE $3",
      [`%${name}%`, `${name}%`, `%${name}`]
    );
    return result.rows;
  } catch (error) {
    console.error("Error searching for usernames:", error);
    return []; // Return an empty array on failure
  }
}

async function deleteDBQuery() {
  await pool.query("DROP TABLE usernames");
}

export default { getAllUsernames, insertUsername, searchName, deleteDBQuery };

// Add a new route GET /delete to delete all usernames from the db.