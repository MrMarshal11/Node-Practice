import pool from "../../db/pool.js"

async function getTrainers() {
    try {
        const { rows } = await pool.query('SELECT trainer_name FROM trainers;')
        return rows;
    } catch (error) {
        console.log('error at getTrainers()');
        console.log(error);
    }
}

export default getTrainers;