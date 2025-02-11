import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./signup.css"; // New custom CSS file
import Gimg from "../../img/google.png"

const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleGoogleSignIn = () => {
        window.location.href = "http://localhost:8081/oauth2/authorization/google";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/auth/signup", formData);
            console.log("Signup successful:", response.data);
            toast.success("Account created successfully!");
            navigate("/signin");
        } catch (error) {
            console.error("Signup error:", error);
            const errorMsg = error.response?.data?.message || "Failed to create account. Try again.";
            setError(errorMsg);
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-xxl bg-primary hero-header"  style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh" 
        }}>
            <div className="signup-card">
                <h4>Create a New Account</h4>
                <h6 className="signup-subtext">Sign up to continue</h6>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="signup-input"
                        placeholder="Username"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="signup-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="signup-input"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    {error && <p className="signup-error-text">{error}</p>}
                    <button type="submit" className="signup-btn" disabled={loading}>
                        {loading ? "Signing Up..." : "SIGN UP"}
                    </button>
                    <p className="signup-login-link">
                        Already have an account? <Link to="/signin">Login</Link>
                    </p>
                    <button type="button" className="signin-google-btn" onClick={handleGoogleSignIn}>
                        <img className="signin-google-icon" src={Gimg} alt="Google" />
                        Sign in with Google
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
