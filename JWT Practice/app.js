import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());

const posts = [
  {
    username: "bob",
    title: "post 1",
  },
  {
    username: "jim",
    title: "post 2",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.post("/login", (req, res) => {
  // Assuming you authenticated the user already (maybe with passport)
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}/`)
);
