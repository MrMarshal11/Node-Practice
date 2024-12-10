import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:5173"],
};

dotenv.config();
const app = express();
const port = 8000;

app.use(cors(corsOptions));

// Notes from a random vid: Im assuming that how this works is you get your data from the database via model queries, then you evenutally send it here via controllers and then, you send the data you collected through a res.json(data), where you can get API fetch using your front end.

// just a test
app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "banana", "items"] });
});

app.listen(port, () => console.log(`running at http://localhost:${port}/`));
