const Notification = require("../models/Notification");
const AgentNotification = require("../models/AgentNotification");

// Get notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch notifications" });
  }
};

// Get agent notifications
exports.getAgentNotifications = async (req, res) => {
  try {
    const notifications = await AgentNotification.find({ userId: req.params.userId })
      .populate("senderId");
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch notifications" });
  }
};

// Create notification
exports.createNotification = async (req, res) => {
  try {
    const { userId, senderId, content } = req.body;
    const notification = await Notification.create({ userId, senderId, content });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create notification" });
  }
};

// Create agent notification
exports.createAgentNotification = async (req, res) => {
  try {
    const { userId, senderId, content } = req.body;
    const notification = await AgentNotification.create({ userId, senderId, content });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create agent notification" });
  }
};

// Delete notifications
exports.deleteNotifications = async (req, res) => {
  try {
    await Notification.deleteMany({ userId: req.params.userId });
    res.json({ msg: "Notifications deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete notifications" });
  }
};
