import db from "../db/queries.js";

async function getUserNames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", { usernames: usernames}); // Change this to render an ejs file
}

async function renderForm(req, res) {
  await res.render("new");
}

async function postForm(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

export default { getUserNames, renderForm, postForm };
