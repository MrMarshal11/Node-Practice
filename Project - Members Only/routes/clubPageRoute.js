import express from "express";
import controller from "../controllers/clubPageController.js";

const clubPageRouter = express.Router();

clubPageRouter.get('/', controller.renderClubPage);
clubPageRouter.post('/delete', controller.deleteMessage);

export default clubPageRouter;