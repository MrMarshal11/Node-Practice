import express from "express";
import upload from "../multer/multer.js";
import controller from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get("/", controller.renderIndex);
indexRouter.get("/login", controller.renderLogin);
indexRouter.get("/signUp", controller.renderSignUp);
indexRouter.get("/newFolder", controller.renderNewFolderForm);
indexRouter.get("/folder/:folderName/uploadFile", controller.renderUploadFile);
indexRouter.get("/folder/:folderName", controller.renderSpecificFolder);

indexRouter.post("/login", controller.verifyLogin);
indexRouter.post("/signUp", controller.signUpComplete);
indexRouter.post("/newFolder", controller.sendNewFolderToDB);

indexRouter.post(
  "/folder/:folderName/uploadFile",
  upload.single("uploaded_file"),
  controller.postUploadedFiles
);

export default indexRouter;
