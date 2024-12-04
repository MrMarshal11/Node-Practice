import model from "../prisma/queries.js";
import bcrypt from "bcryptjs";

async function renderIndex(req, res) {
  try {
    // await model.createUserQuery("greg2", "greg2'sPassword"); // just a demo of adding the user to the db
    await res.render("index", { page: "home" });
  } catch (error) {
    console.log(`error at renderIndex(), ${error}`);
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

// async function renderLogin(req, res) {
//   try {
//     await res.render("index", { page: "login" });
//   } catch (error) {
//     console.log(`error at renderLogin(), ${error}`);
//   }
// }

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

export default { renderIndex, renderLogin, renderSignUp, signUpComplete };
