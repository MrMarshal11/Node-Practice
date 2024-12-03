import express from "express";
import path from "node:path";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from 'express-session';
import pool from "./db/pool.js";
import bcrypt from "bcryptjs";

import indexRouter from "./routes/indexRoute.js";
import clubPageRouter from "./routes/clubPageRoute.js";
import createMessageRouter from "./routes/createMessageRoute.js";
import loggedInRouter from "./routes/loggedInRouter.js";
import becomeAdminRouter from "./routes/becomeAdminRoute.js";

const app = express();
const port = 8080;

const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Check username & password match after user inputs login details
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log('passwords do not match!');
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  // console.log(req.user);
  next();
});

////

app.get("/logOut", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.use("/", indexRouter);
app.use("/clubPage", clubPageRouter);
app.use("/createMessage", createMessageRouter);

app.use("/loggedIn", loggedInRouter);
app.use("/becomeAdmin", becomeAdminRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}/`));