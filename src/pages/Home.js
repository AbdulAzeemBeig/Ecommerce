import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgMouse } from "react-icons/cg";
import ProductCard from "../components/ProductCard.js";
import "../components/ProductCard.css";
import "../pages/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("Fetched products successfully:", response.data);
        setProducts(response.data.product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce website</p>
        <h1>Find Amazing Products</h1>
        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <div className="homeHeading">Featured products</div>
      <div className="container" id="container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
