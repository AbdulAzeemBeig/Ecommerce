import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import api from "../services/api";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState("");

  const handleCheckout = async () => {
    try {
      const order = {
        items: cart,
        address,
      };
      await api.post("/orders", order);
      clearCart();
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Shipping Address"
      />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
