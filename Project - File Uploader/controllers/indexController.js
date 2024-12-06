import model from "../prisma/queries.js";
import bcrypt from "bcryptjs";
import passport from "passport";

async function renderIndex(req, res) {
  try {
    const user = req.user;

    if (!user) {
      await res.render("index", { page: "home", user: null });
    } else {
      await res.render("index", { page: "home", user });
    }
  } catch (error) {
    console.log(`error at renderIndex(), ${error}`);
  }
}

// Files & Folders below

async function renderUploadFile(req, res) {
  try {
    const user = req.user;
    await res.render("index", { page: "uploadFile", user });
  } catch (error) {
    console.log(`error at renderUploadFile(), ${error}`);
  }
}

async function postUploadedFiles(req, res) {
  try {
    const { filename, path: filepath, mimetype, size } = req.file;

    await model.createFileQuery(filename, filepath, mimetype, size);

    console.log(`file collected: ${filename}`); // for debugging
    await res.redirect("/");
  } catch (error) {
    console.log(`error at postUploadedFiles(), ${error}`);
  }
}

async function renderNewFolderForm(req, res) {
  try {
    await res.render("index", { page: "newFolderForm" });
  } catch (error) {
    console.log(`error at renderNewFolderForm(), ${error}`);
  }
}

async function sendNewFolderToDB(req, res) {
  try {
    // const folderName = req.body.newFolder;
    // model to push the new folder to the database.
    await res.redirect("/");
  } catch (error) {
    console.log(`error at sendNewFolderToDB(), ${error}`);
  }
}

// Login & Sign Up functionalities below:

async function renderLogin(req, res) {
  try {
    await res.render("index", { page: "login" });
  } catch (error) {
    console.log(`error at renderLogin(), ${error}`);
  }
}

async function renderSignUp(req, res) {
  try {
    await res.render("index", { page: "signUp" });
  } catch (error) {
    console.log(`error at renderSIgnUp(), ${error}`);
  }
}

function verifyLogin(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })(req, res, next); // Call the returned function
}

async function signUpComplete(req, res) {
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password === confirmPassword) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const fullname = `${req.body.firstname} ${req.body.lastname}`;
      const username = req.body.username;

      model.createUserQuery(fullname, username, hashedPassword);
      await res.redirect("/");
    } else {
      console.log("passwords do not match");
      res.redirect("/signUp");
    }
  } catch (error) {
    console.log(`error at signUpComplete(), ${error}`);
  }
}

export default {
  renderIndex,
  renderLogin,
  renderSignUp,
  signUpComplete,
  verifyLogin,
  renderUploadFile,
  postUploadedFiles,
  renderNewFolderForm,
  sendNewFolderToDB,
};
