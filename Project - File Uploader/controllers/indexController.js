import model from "../prisma/queries.js";

async function renderIndex(req, res) {
  try {
    await model.createUserQuery("greg1", "greg1'sPassword");
    await res.render("index");
  } catch (error) {
    console.log(`error at renderIndex(), ${error}`);
  }
}

export default { renderIndex };
