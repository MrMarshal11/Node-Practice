import model from "../prisma/queries.js";
import bcrypt from "bcryptjs";

async function signUp(req, res) {
  try {
    const { username, fullname } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await model.createUserQuery(username, fullname, hashedPassword);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(`error at signUp(), ${error}`);
  }
}

export default { signUp };
