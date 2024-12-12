import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/indexRoutes.js";
import middleware from "./middleware/passport.js";

const corsOptions = {
  origin: [
    "http://localhost:1000",
    "http://localhost:2000",
    "https://blogapifrontend1.vercel.app/",
    "https://blogapifrontend2.vercel.app/",
  ],
};

dotenv.config();
const app = express();
const port = 8000;

middleware.usePassport(app);

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", indexRouter);

app.listen(port, () => console.log(`server is running......`));
