import express from "express";
import path from 'node:path';
import indexRouter from "./routes/indexRoute.js";
import teamRouter from "./routes/teamRoute.js";
import trainersRouter from "./routes/trainersRoute.js";
import newFormRoutes from "./routes/newFormRoutes.js";

const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(process.cwd(), "./MVC/views"));
app.set('view engine', "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

/////////////

app.use('/', indexRouter);
app.use('/team', teamRouter);
app.use('/trainers', trainersRouter);

app.use('/newTrainer', newFormRoutes.newTrainerFormRoute);
app.use('/newPokemon', newFormRoutes.newPokemonFormRoute);


app.listen(port, () => console.log(`http://localhost:${port}/`));