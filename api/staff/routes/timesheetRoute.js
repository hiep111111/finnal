const express = require("express");
const { deletetimeSheetController, gettimeSheetByIdController, gettimeSheetController, postTimeSheetController} = require("../controlles/timeSheetControler");

const router = express.Router();

router.delete("/delete/:id", deletetimeSheetController);
router.get("/get/:id", gettimeSheetByIdController);
router.get("/get", gettimeSheetController);
router.post("/post", postTimeSheetController);

module.exports = router;
