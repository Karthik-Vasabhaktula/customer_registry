const Customer = require("../models/Customer");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Customer.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await Customer.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};
