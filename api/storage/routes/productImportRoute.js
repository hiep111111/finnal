const express = require("express");
const { deletePaymentRequisitionControler, getAllPaymentRequisitionControler, getPaymentRequisitionControler, postPaymentRequisitionControler } = require("../controlles/paymentRequisitionControler");

const router = express.Router();

router.delete("/delete/:id", deletePaymentRequisitionControler);
router.get("/get/:id", getPaymentRequisitionControler);
router.get("/get", getAllPaymentRequisitionControler);
router.post("/post", postPaymentRequisitionControler);

module.exports = router;
