import React, { useEffect, useState } from "react";
import api from "../services/api";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("/admin/products");
      setProducts(response.data.products);
    };

    const fetchOrders = async () => {
      const response = await api.get("/admin/orders");
      setOrders(response.data.orders);
    };

    fetchProducts();
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Products</h2>
      </div>
      <div>
        <h2>Orders</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
