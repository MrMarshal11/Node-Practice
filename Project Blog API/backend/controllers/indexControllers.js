import model from "../prisma/queries.js";
import bcrypt from "bcryptjs";

async function signUp(req, res) {
  try {
    const { username, fullname } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await model.createUserQuery(username, fullname, hashedPassword);
  } catch (error) {
    console.log(`error at signUp(), ${error}`);
  }
}

export default { signUp };
