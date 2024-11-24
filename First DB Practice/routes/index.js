import express from 'express';

const indexRoute = express.Router();

indexRoute.get("/", (req, res) => {
    console.log("usernames will be logged here - wip");
    res.end();
});

export default indexRoute;