const express = require("express");
const { deleteProductExportControler, getAllProductExportControler, getProductExportControler, postProductExportControler} = require("../controlles/productExportControler");

const router = express.Router();

router.delete("/delete/:id", deleteProductExportControler);
router.get("/get/:id", getProductExportControler);
router.get("/get", getAllProductExportControler);
router.post("/post", postProductExportControler);

module.exports = router;