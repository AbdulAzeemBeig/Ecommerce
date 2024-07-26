import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div className="paymentContainer">
      <CheckoutSteps activeStep={2} />
      <div className="paymentBox">
        <h2 className="paymentHeading">Payment Method</h2>
        <form className="paymentForm" onSubmit={submitHandler}>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div>
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="CreditCard"
              checked={paymentMethod === "CreditCard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <button type="submit" className="paymentBtn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
