import models from "../models/displayValues.js";

async function trainersRender(req, res) {
    try {
        const trainers = await models.displayTrainers();
        res.render("trainers", {trainers: trainers});
    } catch (error) {
        console.log('error in trainersRender()');
        console.log(error);
    }
} 

export default trainersRender;