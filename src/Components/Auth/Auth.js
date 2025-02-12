import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const API_BASE_URL = "http://localhost:8080/auth"; // Backend API URL

const Auth = ({ type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validateForm = () => {
    const { email, password } = formData;

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/;
    if (!password.match(passwordRegex)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (type === "signup") {
        const response = await axios.post(`${API_BASE_URL}/signup`, formData);
        toast.success("Signup successful! Redirecting to login...");
        console.log("Signup Response:", response.data);

        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        const loginData = {
          email: formData.email,
          password: formData.password,
        };

        const response = await axios.post(`${API_BASE_URL}/signin`, loginData);

        // Store JWT token
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
          toast.success("Login successful! Redirecting...");

          setTimeout(() => {
            window.location.href = "/dashboard"; // Change to your desired landing page
          }, 2000);
        } else {
          toast.error("Invalid login response: No token received");
        }

        console.log("Login Response:", response.data);
      }
    } catch (error) {
      console.error("API Error:", error.response);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="row g-5 py-5">
          <div className="col-12 text-center"></div>
        </div>
      </div>
      <div className="auth-box">
        <h2 className="auth-title">{type === "login" ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {type === "signup" && (
            <div className="form-group">
              <label htmlFor="formName">Username</label>
              <input
                type="text"
                id="formName"
                name="name"
                placeholder="Enter your username"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="formEmail">Email</label>
            <input
              type="email"
              id="formEmail"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formPassword">Password</label>
            <input
              type="password"
              id="formPassword"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="auth-btn">
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="auth-toggle-text">
          {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <a href={type === "login" ? "/signup" : "/login"}>
            {type === "login" ? "Sign Up" : "Login"}
          </a>
        </p>
      </div>
    </>
  );
};

export const Login = () => <Auth type="login" />;
export const Signup = () => <Auth type="signup" />;
