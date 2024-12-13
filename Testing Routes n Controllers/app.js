import express from "express";
import index from "./index.js";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/", index);

app.listen(3000, () => console.log("running"));
