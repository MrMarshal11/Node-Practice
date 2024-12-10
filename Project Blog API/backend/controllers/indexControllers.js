import model from "../prisma/queries.js";
import bcrypt from "bcryptjs";
import passport from "passport";
import middleware from "../middleware/passport.js";

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

// Verifies login and generates token.
function verifyLogin(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      // Authentication failed
      return res.status(401).json({ message: info?.message || "Login failed" });
    }

    // If user is authenticated, generate a token
    const token = middleware.generateToken(user);
    return res.json({ accessToken: token });
  })(req, res, next);
}

export default { signUp, verifyLogin };
