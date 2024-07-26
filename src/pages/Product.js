import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pages/Product.css";
import api from "../services/api";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="productContainer">
      <Link className="productCard" to={`/products/${product._id}`}>
        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0].url
              : ""
          }
          alt={product.name}
        />
        <p>{product.name}</p>
        <div>
          <span>({product.numOfReviews} Reviews)</span>
        </div>
        <span>${product.price}</span>
      </Link>
    </div>
  );
};

export default Product;
