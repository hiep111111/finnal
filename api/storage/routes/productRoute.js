const express = require("express");
const { deleteProductController, getAllProductController, getProductController, postProductController, putProductController, updateProductCountController, } = require("../controlles/productControler");

const router = express.Router();

router.delete("/delete/:id", deleteProductController);
router.get("/get/:id", getProductController);
router.get("/get", getAllProductController);
router.post("/post", postProductController);
router.put("/put/:id", putProductController);
router.put("/putCount/:id", updateProductCountController);

module.exports = router;
