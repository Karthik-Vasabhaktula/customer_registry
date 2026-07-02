const Complaint = require("../models/Complaint");

// Create complaint
exports.createComplaint = async (req, res) => {
  try {
    const { customer, complaintDetails, name, phone, email } = req.body;
    const newComplaint = new Complaint({
      customer,
      complaintDetails,
      name,
      phone,
      email,
      agent: " ",
    });
    const savedComplaint = await newComplaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update status
exports.updateComplaintStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ msg: "Complaint not found" });

    complaint.status = req.body.status;
    const updated = await complaint.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get all complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get complaint by Agent ID
exports.getComplaintsByAgent = async (req, res) => {
  try {
    const complaints = await Complaint.find({ agent: req.params.id }).populate("customer");
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get complaint by Customer ID
exports.getComplaintsByCustomer = async (req, res) => {
  try {
    const complaints = await Complaint.find({ customer: req.params.id }).populate("customer");
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
