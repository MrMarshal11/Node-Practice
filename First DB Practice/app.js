import express from 'express';

import indexRoute from './routes/indexRoute.js';
import newRoute from './routes/newRoute.js';

const app = express();
const port = 8080;

// Setting EJS
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/new", newRoute);


app.listen(port, () => console.log(`running on http://localhost:${port}/`));