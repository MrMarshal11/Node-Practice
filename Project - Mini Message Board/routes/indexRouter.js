import express from "express";
import db from "../db/queries.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messageBoard = await db.showMessages(); // Fetch messages from DB
    res.render("ejsIndex", { message_board: messageBoard }); // Pass data to the template
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("An error occurred while loading messages.");
  }
});

router.get("/new", (req, res) => {
    res.render("ejsForm");
});

router.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body; // Extract data from the form
  db.newMessage(messageText, messageUser);
  res.redirect("/");
})

export default router;

