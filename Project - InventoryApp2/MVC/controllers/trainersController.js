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

export default renderTrainers;