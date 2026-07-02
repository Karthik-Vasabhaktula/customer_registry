const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  type: { type: String, required: true }, // admin, agent, user
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Customer", customerSchema);
