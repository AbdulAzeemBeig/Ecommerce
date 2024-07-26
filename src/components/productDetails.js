import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getProductDetails } from "../actions/productAction";
import Loader from "../Loader/loader";
import "../components/productDetails.css";
import { addToCart, removeFromCart } from "../actions/cartActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product.stock > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart(product, quantity));
    navigate("/cart");
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product._id));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Fragment>
      <div className="ProductDetails">
        <div className="imageContainer">
          <div className="simpleCarousel">
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={i}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </div>
        </div>

        <div className="productInfo">
          <div className="detailsBlock">
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className="detailsBlock">
            <span className="detailsBlock-span">
              {" "}
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock">
            <h1>{`₹${product.price}`}</h1>
            <div className="quantityControl">
              <div className="quantityControl-buttons">
                {/* Decrease quantity button */}
                <button
                  className="quantityControl-button"
                  onClick={decreaseQuantity}
                >
                  -
                </button>

                <input
                  readOnly
                  type="number"
                  className="quantityInput"
                  value={quantity}
                />

                <button
                  className="quantityControl-button"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              <button className="addToCartBtn" onClick={addToCartHandler}>
                Add to Cart
              </button>

              <button
                className="removeFromCartBtn"
                onClick={removeFromCartHandler}
              >
                Remove from Cart
              </button>
            </div>

            <p>
              Status:
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "Out of Stock" : "In Stock"}
              </b>
            </p>
          </div>

          <div className="detailsBlock">
            <div className="descriptionBox">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
