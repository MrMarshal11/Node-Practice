import pool from "../db/pool.js";

async function displayTrainers() {
    try {
        const { rows } = await pool.query('SELECT trainer FROM trainers');
        return rows;        
    } catch (error) {
        console.log('error at displayTrainers()');
        console.log(error);
    }
}

export default displayTrainers;