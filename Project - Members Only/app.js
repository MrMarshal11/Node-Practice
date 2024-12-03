import express from "express";
import path from "node:path";
import usePassport from "./passport/passportVerification.js";

import indexRouter from "./routes/indexRoute.js";
import clubPageRouter from "./routes/clubPageRoute.js";
import createMessageRouter from "./routes/createMessageRoute.js";
import loggedInRouter from "./routes/loggedInRouter.js";
import becomeAdminRouter from "./routes/becomeAdminRoute.js";

const app = express();
const port = 8080;

const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

///////

usePassport(app);

app.use("/", indexRouter);
app.use("/clubPage", clubPageRouter);
app.use("/createMessage", createMessageRouter);

app.use("/loggedIn", loggedInRouter);
app.use("/becomeAdmin", becomeAdminRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}/`));