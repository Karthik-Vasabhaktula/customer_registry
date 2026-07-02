const Agent = require("../models/Agent");
const Complaint = require("../models/Complaint");

// Assign complaint to agent
exports.assignComplaint = async (req, res) => {
  try {
    const { customerId, agentId, complaintId } = req.body;

    const newAgent = new Agent({ customerId, agentId, complaintId });
    const saved = await newAgent.save();

    // Update complaint with agent ID
    const complaint = await Complaint.findById(complaintId);
    complaint.agent = agentId;
    await complaint.save();

    saved.complaintDetails = complaint;
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// Get complaints assigned to agent
exports.getAgentComplaints = async (req, res) => {
  try {
    const complaints = await Agent.find({ agentId: req.params.id })
      .populate("complaintId")
      .populate("customerId");
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};
