import express from "express";
import path from "node:path";
import usePassport from "./passport/passport.js";

import indexRouter from "./routes/indexRoute.js";

const app = express();
const port = 8080;

const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));


usePassport(app);

///////

app.use("/", indexRouter);

app.listen(port, () => console.log(`up at http://localhost:${port}/`));