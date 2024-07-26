exports.processPayPalPayment = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "PayPal payment processed successfully" });
};

exports.processCreditCardPayment = (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      message: "Credit Card payment processed successfully",
    });
};
