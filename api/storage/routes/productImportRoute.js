const express = require("express");
const { deleteProductImportControler, getAllProductImportControler, getProductImportControler, postProductImportControler } = require("../controlles/productImportControler");

const router = express.Router();

router.delete("/delete/:id", deleteProductImportControler);
router.get("/get/:id", getProductImportControler);
router.get("/get", getAllProductImportControler);
router.post("/post", postProductImportControler);

module.exports = router;
