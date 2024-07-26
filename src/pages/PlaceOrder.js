import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrder = () => {
  return (
    <div className="placeOrderContainer">
      <CheckoutSteps activeStep={3} />{" "}
      <div className="placeOrderBox">
        <h2 className="placeOrderHeading">Order in Progress...</h2>

        <p>Your order is being processed.</p>
      </div>
    </div>
  );
};

export default PlaceOrder;
