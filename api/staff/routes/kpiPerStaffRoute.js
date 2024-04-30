const express = require("express");
const { createKpiPerStaff, getKpiPerStaff, deleteKpiPerStaff, getAllKpiPerStaff} = require("../controlles/kpiPerStaffController.js");

const router = express.Router();

router.delete("/delete/:id", deleteKpiPerStaff);
router.get("/get/:id", getKpiPerStaff);
router.get("/get", getAllKpiPerStaff);
router.post("/post", createKpiPerStaff);

module.exports = router;
