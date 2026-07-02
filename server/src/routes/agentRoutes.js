const express = require("express");
const { assignComplaint, getAgentComplaints } = require("../controllers/agentController");
const router = express.Router();

router.post("/", assignComplaint);
router.get("/:id", getAgentComplaints);

module.exports = router;
