// src/pages/Cart.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../actions/cartActions";
import CartItemCard from "../components/CartItemCard";
import { Link, useNavigate } from "react-router-dom";
import "../pages/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const decreaseQuantity = (productId) => {
    dispatch(decreaseItemQuantity(productId));
  };

  const increaseQuantity = (productId, stock) => {
    dispatch(increaseItemQuantity(productId, stock));
  };

  const cartContent = cartItems.map((item) => {
    if (!item) {
      return (
        <div key="invalid">
          <p>Invalid product data</p>
        </div>
      );
    }

    const subtotal = item.price * item.quantity;

    return (
      <div className="cartContainer" key={item._id}>
        <CartItemCard item={item} deleteCartItems={handleRemoveFromCart} />
        <div className="cartInput">
          <button onClick={() => decreaseQuantity(item._id)}>-</button>
          <input type="number" value={item.quantity} readOnly />
          <button onClick={() => increaseQuantity(item._id, item.stock)}>
            +
          </button>
        </div>
        <p className="cartSubTotal">{`₹${subtotal}`}</p>
      </div>
    );
  });

  const totalPrice = cartItems.reduce((acc, item) => {
    if (item) {
      return acc + item.quantity * item.price;
    }
    return acc;
  }, 0);

  const proceedToCheckout = () => {
    navigate("/shipping");
  };

  return (
    <div className="cartPage">
      <div className="cartHeader">
        <p>Product</p>
        <p>Cart</p>
        <p>SubTotal</p>
      </div>
      {cartContent}
      <div className="cartGrossProfit">
        <div></div>
        <div className="cartGrossProfitBox">
          <p>Gross Total</p>
          <p>{`₹${totalPrice}`}</p>
        </div>
        <div></div>
        <div className="checkOutBtn">
          <button onClick={handleClearCart}>Clear Cart</button>
          <button onClick={proceedToCheckout}>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
