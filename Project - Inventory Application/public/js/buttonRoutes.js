// Security measure.
const allowedRoutes = ['', "trainers", "teams", "team", "newTeam", "newTrainer"];

function changeRoute(url) {
  if (allowedRoutes.includes(url)) {
    window.location.href = `/${url}`;
  } else {
    console.error("Invalid route");
  }
}

function homeButton() {
  changeRoute('')
}

function viewTrainersButton() {
  changeRoute("trainers");
}

function viewTeamsButton() {
  changeRoute("teams");
}

function viewTeamButton() {
  changeRoute("team");
}

function newTeamFormButton() {
  changeRoute("newTeam");
}

function newTrainerFormButton() {
  changeRoute("newTrainer");
}
