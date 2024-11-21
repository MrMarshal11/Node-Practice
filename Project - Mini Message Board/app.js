import express from "express";
import path from "node:path";

import indexRouter from "./routes/indexRouter.js"
import notFound from "./routes/404Router.js";

const app = express();
const port = 8080;

// Setting EJS
app.set("views", path.join(process.cwd(), "views")); // Note the process.cwd(), as its used instead of _dirname for ES6 
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Serving static assets
const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));



// Index Page Router
app.use("/", indexRouter);

// 404 Router
app.use(notFound);

app.listen(port, () => console.log(`server is running currently on http://localhost:${port}/`));