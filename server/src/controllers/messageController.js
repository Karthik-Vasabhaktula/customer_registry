const Communication = require("../models/Communication");
const Customer = require("../models/Customer");
const mongoose = require("mongoose");
// Send message
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;
    const newMessage = new Communication({ senderId, receiverId, content });
    const saved = await newMessage.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create message" });
  }
};

// Get all messages with sender/receiver info
exports.getMessages = async (req, res) => {
  try {
    const messages = await Communication.find();
    const senderIds = messages.map(m => m.senderId);
    const receiverIds = messages.map(m => m.receiverId);

    const senders = await Customer.find({ _id: { $in: senderIds } });
    const receivers = await Customer.find({ _id: { $in: receiverIds } });

    const messagesWithUsers = messages.map(m => {
      const sender = senders.find(u => u._id.equals(m.senderId));
      const receiver = receivers.find(u => u._id.equals(m.receiverId));
      return { ...m._doc, sender, receiver };
    });

    res.json(messagesWithUsers);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch messages" });
  }
};
// Get messages between two users


exports.getConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;
    const messages = await Communication.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
// get all conversations for a user

exports.getUserMessages = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ msg: "Invalid userId" });
    }

    const messages = await Communication.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    })
      .populate("senderId", "firstname lastname email")
      .populate("receiverId", "firstname lastname email")
      .sort({ createdAt: -1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch user messages", error: err.message });
  }
};


