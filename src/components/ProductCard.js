import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../components/ProductCard.css";

const ProductCard = ({ product }) => {
  if (!product || !product._id) {
    return null;
  }

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0]?.url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    numOfReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
