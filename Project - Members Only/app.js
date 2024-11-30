import express from "express";
import path from "node:path";

import indexRouter from "./routes/indexRoute.js";

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

//////

app.use("/", indexRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}/`));