import model from "../model/queries.js";

async function renderTrainers(req, res) {
    try {
        const trainers = await model.getTrainers();
        res.render("trainers", {trainers});
    } catch (error) {
        console.log('error at renderTrainers()');
        console.log(error);
    }
} 

async function deleteTrainer(req, res) {
    try {
        const { trainerName } = req.body;
        await model.deleteTrainerQuery(trainerName);
        res.redirect(`/trainers`);
    } catch (error) {
        console.log('error at deleteTrainer()', error);
    }
}

export default {renderTrainers, deleteTrainer};