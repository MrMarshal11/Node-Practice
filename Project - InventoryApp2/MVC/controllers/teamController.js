import model from "../model/queries.js"

async function renderTeam(req, res) {
    try {
        const {trainerName} = req.params;
        const team = await model.getTeam(trainerName);
        res.render("team", {team, trainerName});
    } catch (error) {
        console.log('error at renderTeam()', error);
        res.status(500).send('Server side error...');
    }
} 

export default renderTeam;