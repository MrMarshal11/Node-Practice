import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/indexRoutes.js";
import middleware from "./middleware/passport.js";

const corsOptions = {
  origin: ["http://localhost:5173"],
};

dotenv.config();
const app = express();
const port = 8000;

middleware.usePassport(app);

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", indexRouter);

app.listen(port, () => console.log(`running at http://localhost:${port}/`));
