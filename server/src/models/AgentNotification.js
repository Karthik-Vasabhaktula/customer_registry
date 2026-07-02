  const mongoose = require("mongoose");
  const agentNotificationSchema = new mongoose.Schema({
    userId: { type: String, ref: 'User', required: true },
    senderId: { type: String, ref: 'User', required: true },
    content: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("AgentNotification",agentNotificationSchema)