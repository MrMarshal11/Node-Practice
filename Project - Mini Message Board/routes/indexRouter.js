import express from "express";

const router = express.Router();

// Messages (maybe supposed to be replicating a database)
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Keep pushing forward!",
    user: "Samantha",
    added: new Date(),
  },
  {
    text: "The sky's the limit.",
    user: "Jordan",
    added: new Date(),
  },
  {
    text: "Dream big, work hard.",
    user: "Taylor",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("ejsIndex", { messages: messages });
});

router.get("/new", (req, res) => {
    res.render("ejsForm");
});

router.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body; // Extract data from the form
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
})

export default router;

