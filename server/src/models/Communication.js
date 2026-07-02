const mongoose = require("mongoose");

const communicationSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Communication", communicationSchema);
