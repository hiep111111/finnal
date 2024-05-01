
const express = require("express");
const { deleteOverTimeControler, getAllOverTimeControler, getOverTimeControler, postOverTimeControler} = require("../controlles/overTimeControler");

const router = express.Router();

router.delete("/delete/:id", deleteOverTimeControler);
router.get("/get/:id", getOverTimeControler);
router.get("/get", getAllOverTimeControler);
router.post("/post", postOverTimeControler);

module.exports = router;
