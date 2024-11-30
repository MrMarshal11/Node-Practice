import express from "express";
import path from "node:path";

import indexRouter from "./routes/indexRoute.js";
import clubPageRouter from "./routes/clubPageRoute.js";

const app = express();
const port = 8080;

const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

//////

app.use("/", indexRouter);
app.use("/clubPage", clubPageRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}/`));