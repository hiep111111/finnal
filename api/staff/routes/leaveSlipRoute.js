const express = require("express");
const { createLeaveSlip, getAllLeaveSlip, getLeaveSlip, deleteLeaveSlip} = require("../controlles/leaveSlipController");

const router = express.Router();

router.delete("/delete/:id", deleteLeaveSlip);
router.get("/get/:id", getLeaveSlip);
router.get("/get", getAllLeaveSlip);
router.post("/post", createLeaveSlip);

module.exports = router;
