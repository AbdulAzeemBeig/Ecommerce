const express = require("express");
const router = express.Router();
const {
  processPayPalPayment,
  processCreditCardPayment,
} = require("../controllers/paymentController");

router.post("/paypal", processPayPalPayment);

router.post("/creditcard", processCreditCardPayment);

module.exports = router;
