import db from "../db/queries.js";

async function showName(req, res) {
  try {
    const search = req.query.search;
    let usernames;

    if (search) {
      // Perform a filtered search
      usernames = await db.searchName(search);
    } else {
      // Fetch all usernames
      usernames = await db.getAllUsernames();
    }

    if (!Array.isArray(usernames)) {
      usernames = []; // Fallback to an empty array
    }

    console.log("Usernames: ", usernames);
    res.render("index", { usernames });
  } catch (error) {
    console.error("Error in showName:", error);
    res.status(500).send("An error occurred in the showName function");
  }
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
