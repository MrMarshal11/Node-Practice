import model from "../prisma/queries.js";

async function renderIndex(req, res) {
  try {
    // await model.createUserQuery("greg2", "greg2'sPassword"); // just a demo of adding the user to the db
    await res.render("index", { page: "home" });
  } catch (error) {
    console.log(`error at renderIndex(), ${error}`);
  }
}

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

export default { renderIndex, renderLogin, renderSignUp };
