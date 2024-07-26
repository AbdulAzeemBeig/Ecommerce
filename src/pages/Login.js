import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import "../pages/Login.css"; // Import your CSS file

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(credentials));
      setLoginSuccess(true);
      setError(null);
      // Redirect or handle success as needed
    } catch (error) {
      console.error("Login error:", error);
      setLoginSuccess(false);
      setError("Invalid credentials. Please try again."); // Example error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {loginSuccess && <p>Login Successful!</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
