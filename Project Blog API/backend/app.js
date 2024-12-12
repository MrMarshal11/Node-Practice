import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/indexRoutes.js";
import middleware from "./middleware/passport.js";

const corsOptions = {
  origin: ["http://localhost:1000", "http://localhost:2000"],
};

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

middleware.usePassport(app);

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", indexRouter);

app.listen(port, () => console.log(`running at http://localhost:${port}/`));
