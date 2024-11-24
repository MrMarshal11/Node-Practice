import express from "express";

const newRoute = express.Router();

newRoute.get("/", (req, res) => {
    res.render('new');
})

newRoute.post("/", (req, res) => {
    console.log("username to be saved: ", req.body.username);
    res.end();
})

export default newRoute;