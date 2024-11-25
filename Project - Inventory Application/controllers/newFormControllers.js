function newTeamFormRender(req, res) {
    res.render("newTeamForm");
} 

function newTrainerFormRender(req, res) {
    res.render("newTrainerForm");
} 

export default {newTeamFormRender, newTrainerFormRender};