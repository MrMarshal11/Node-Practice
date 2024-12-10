import express from "express";
import controller from "../controllers/indexControllers.js";
import middleware from "../middleware/passport.js";

const indexRouter = express.Router();

indexRouter.post("/signIn", controller.signUp);
indexRouter.post("/login", controller.verifyLogin);

indexRouter.post("/newPost", controller.createNewPost);

// Protected route example: only accessible if valid JWT is present (maybe use react instead?)
indexRouter.get("/protected", middleware.authenticateToken, (req, res) => {
  // Here req.user contains the decoded JWT payload
  res.json({
    message: `Hello ${req.user.name}, you have access to this protected route!`,
  });
});

export default indexRouter;
