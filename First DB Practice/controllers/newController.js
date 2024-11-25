import db from "../db/queries.js";

async function showName(req, res) {
    const search = req.query.search; // Extract 'search' query parameter from the URL
    let usernames;

    if (search) {
      // If a search query is provided, perform a filtered search
      usernames = await db.searchName(search); // Ensure `searchName` is implemented in your DB layer
    } else {
      // If no search query, fetch all usernames
      usernames = await db.getAllUsernames();
    }
    console.log("Usernames: ", usernames);
    res.render("index", { usernames });
}

async function renderForm(req, res) {
  await res.render("new");
}

async function postForm(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

export default { renderForm, postForm, showName };