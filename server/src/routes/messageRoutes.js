const express = require("express");
const {
  sendMessage,
  getMessages,
  getConversation,
  getUserMessages,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/", sendMessage);
router.get("/", getMessages); // all messages (probably admin/debug only)
router.get("/user/:userId", getUserMessages);
router.get("/:senderId/:receiverId", getConversation); // specific chat


module.exports = router;
