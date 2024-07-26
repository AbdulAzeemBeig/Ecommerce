import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import "../pages/confirmOrder.css";

const ConfirmOrder = () => {
  const { items: cartItems = [], shippingInfo } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingPrice = subtotal > 200 ? 0 : 25;
  const totalPrice = subtotal + shippingPrice;

  const proceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="confirmOrderPage">
      <CheckoutSteps activeStep={1} />
      <div className="confirmShippingArea">
        <h2>Shipping Info</h2>
        <div className="confirmShippingBox">
          <div>
            <p>Address:</p>
            <span>{shippingInfo.address}</span>
          </div>
          <div>
            <p>City:</p>
            <span>{shippingInfo.city}</span>
          </div>
          <div>
            <p>State:</p>
            <span>{shippingInfo.state}</span>
          </div>
          <div>
            <p>Country:</p>
            <span>{shippingInfo.country}</span>
          </div>
          <div>
            <p>Pin Code:</p>
            <span>{shippingInfo.pinCode}</span>
          </div>
          <div>
            <p>Phone:</p>
            <span>{shippingInfo.phoneNo}</span>
          </div>
        </div>
      </div>
      <div className="confirmCartItems">
        <h2>Your Cart Items:</h2>
        <div className="confirmCartItemsContainer">
          {cartItems.map((item) => (
            <div key={item._id}>
              <img src={item.image} alt="Product" />
              <span>{item.name}</span>
              <span>
                {item.quantity} X ₹{item.price} ={" "}
                <b>₹{item.quantity * item.price}</b>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="orderSummary">
        <h2>Order Summary</h2>
        <div>
          <p>Subtotal:</p>
          <span>₹{subtotal}</span>
        </div>
        <div>
          <p>Shipping:</p>
          <span>₹{shippingPrice}</span>
        </div>
        <div>
          <p>Total:</p>
          <span>₹{totalPrice}</span>
        </div>
        <button onClick={proceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
