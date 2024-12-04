import model from "../prisma/queries.js";

async function renderIndex(req, res) {
  try {
    // await model.createUserQuery("greg2", "greg2'sPassword"); // just a demo of adding the user to the db
    await res.render("index");
  } catch (error) {
    console.log(`error at renderIndex(), ${error}`);
  }
}

export default { renderIndex };
