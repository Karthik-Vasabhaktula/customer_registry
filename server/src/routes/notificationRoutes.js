const express = require("express");
const {
  getNotifications,
  getAgentNotifications,
  createNotification,
  createAgentNotification,
  deleteNotifications,
} = require("../controllers/notificationController");

const router = express.Router();

router.get("/:userId", getNotifications);
router.get("/agent/:userId", getAgentNotifications);
router.post("/", createNotification);
router.post("/agent", createAgentNotification);
router.delete("/:userId", deleteNotifications);

module.exports = router;
