import db from "../db/queries.js";

async function deleteDB(req, res) {
    await db.deleteDBQuery();
    console.log('table contents deleted.')
    res.redirect("/");
}

export default deleteDB;