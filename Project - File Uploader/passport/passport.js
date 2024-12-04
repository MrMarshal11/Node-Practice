import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import prisma from "../prisma/prisma.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

function usePassport(app) {
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
          console.log("passwords do not match!");
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
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      },
      secret: process.env.SECRET, // Replace with a strong secret in production
      resave: true,
      saveUninitialized: true,
      store: new PrismaSessionStore(prisma, {
        checkPeriod: 2 * 60 * 1000, // Remove expired sessions every 2 minutes
        dbRecordIdIsSessionId: true, // Use the session ID as the record ID
        dbRecordIdFunction: undefined, // Optional custom session ID generator
      }),
    })
  );

  app.use(passport.session());

  app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });

  app.get("/logOut", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
}

export default usePassport;