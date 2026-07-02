const express = require("express");
const {
  createComplaint,
  updateComplaintStatus,
  getAllComplaints,
  getComplaintsByAgent,
  getComplaintsByCustomer,
} = require("../controllers/complaintController");

const router = express.Router();

router.post("/", createComplaint);
router.put("/:id/update-status", updateComplaintStatus);
router.get("/", getAllComplaints);
router.get("/agent/:id", getComplaintsByAgent);
router.get("/customer/:id", getComplaintsByCustomer);

module.exports = router;
