import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

/////////////

import indexRoute from "./routes/indexRoute.js";
app.use("/", indexRoute);

app.listen(port, () => console.log(`http://localhost:${port}/`));