import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleUpdateUser = async (updatedUserData) => {
    try {
      const response = await api.put(`/users/${userId}`, updatedUserData);
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <div className="user-details">
        <div className="avatar">
          <img src={user.avatarUrl} alt="User Avatar" />
        </div>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
      <div className="update-form">
        <h3>Update User Details</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateUser(user);
          }}
        >
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
