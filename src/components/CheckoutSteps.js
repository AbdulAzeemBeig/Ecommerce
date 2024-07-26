// src/components/CheckoutSteps.js

import React from "react";
import { Link } from "react-router-dom";
import "../components/CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    { label: "Shipping Details", link: "/shipping" },
    { label: "Confirm Order", link: "/confirmOrder" },
    { label: "Payment", link: "/payment" },
  ];

  return (
    <div className="checkoutSteps">
      {steps.map((step, index) => (
        <div key={index} className={activeStep === index ? "active" : ""}>
          <Link to={step.link}>{step.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
