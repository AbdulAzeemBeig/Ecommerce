import React from "react";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="cartItem">
      <div className="cartItemImage">
        {item.images && item.images.length > 0 ? (
          item.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`${item.name}-${index}`} />
          ))
        ) : (
          <img src="https://i.ibb.co/DRST11n/1.webp" alt="Placeholder" />
        )}
      </div>
      <div className="cartItemInfo">
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => deleteCartItems(item._id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItemCard;
