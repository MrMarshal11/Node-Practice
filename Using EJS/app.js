import express from "express";
import path from "node:path";

import aboutRouter from "./routes/aboutRouter.js";
import contactRouter from "./routes/contactRouter.js";

const PORT = 3000;
const app = express();

// Setting EJS
app.set("views", path.join(process.cwd(), "views")); // Note the process.cwd(), as its used instead of _dirname for ES6 
app.set("view engine", "ejs");

// Index routes & EJS practice
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
  });

// Serving static assets
const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));


//////////////////////////


// About routes
app.use('/about', aboutRouter);

// Contact-us routes
app.use('/contact-us', contactRouter);

// If all other routes fail, then signal 404
app.use((req, res) => {
    res.status(404).sendFile('/404.html', {root:'htmls'});
});

app.listen(PORT, () => console.log(`operational under http://localhost:${PORT}`));