const mongoose = require("mongoose");
const agentSchema = new mongoose.Schema({
    complaintId: { type: mongoose.Schema.Types.ObjectId, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
    createdAt: { type: Date, default: new Date() }
});

module.exports = mongoose.model("Agent", agentSchema )