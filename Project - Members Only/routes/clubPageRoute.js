import express from "express";
import renderClubPage from "../controllers/clubPageController.js";

const clubPageRouter = express.Router();

clubPageRouter.get('/', renderClubPage);

export default clubPageRouter;