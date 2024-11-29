const express = require("express");
const expressSession = require("express-session");
const { Pool } = require("pg");
const pgSession = require("connect-pg-simple")(expressSession);
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Connect to db
const pool = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
});

// Express uses this to parse the request types
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// expressSession is persistent during reloads
app.use(
  expressSession({
    store: new pgSession({
      pool: pool, // Connection pool
      tableName: "session", // Use another table-name than the default "session" one
      // Insert connect-pg-simple options here
    }),
    secret: process.env.FOO_COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    // Insert express-session options here
  })
);

app.get("/", (req, res) => {
    res.send("helo worl");
  });

app.listen(8000, () => console.log(`hosting at http://localhost:8000/`));
