import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          dispatch(loginSuccess(userData));
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        navigate("/login");
      }
    };

    if (user && !user.username) {
      fetchUserData();
    }
  }, [dispatch, navigate, user]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
