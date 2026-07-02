const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String,required: true},
    complaintDetails: { type: String, required: true },
    status: { type: String, default: 'pending' },
    agent: { type: String,required:true},
    createdAt: { type: Date, default: new Date() }
});
module.exports = mongoose.model("Complaint",complaintSchema)