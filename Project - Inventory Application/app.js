import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

/////////////

import indexRoute from "./routes/indexRoute.js";
app.use("/", indexRoute);

import trainersRoute from "./routes/trainersRoute.js";
app.use("/trainers", trainersRoute);

import teamsRoutes from "./routes/teamsRoute.js";
app.use("/teams", teamsRoutes);

import teamRoute from "./routes/teamRoute.js";
app.use("/team", teamRoute);

import formControllers from "./routes/newFormRoutes.js"
app.use("/newTrainer", formControllers.newTrainerFormRoute);
app.use("/newTeam", formControllers.newTeamFormRoute);


app.listen(port, () => console.log(`http://localhost:${port}/`));