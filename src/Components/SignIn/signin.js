import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./signin.css"; // Updated CSS file
import "../../css/style.css";
import Gimg from "../../img/google.png"

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/auth/signin", formData);
            const token = response.data.token;
            cookies.set("Token", token, { path: "/", secure: true, sameSite: "Strict" });

            toast.success("Successfully signed in!");
            const redirectUrl = localStorage.getItem("redirectUrl") || "/home";
            navigate(redirectUrl);
        } catch (error) {
            console.error(error);
            const errorMsg = error.response?.data?.message || "Invalid credentials.";
            setError(errorMsg);
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        window.location.href = "http://localhost:8081/oauth2/authorization/google";
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        if (token) {
            cookies.set("Token", token, { path: "/", secure: true, httpOnly: true });
            toast.success("Successfully signed in with Google!");
            navigate(localStorage.getItem("redirectUrl") || "/home");
        }
    }, [cookies, navigate]);

    return (
        <div className="container-xxl bg-primary hero-header" style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh" 
        }}>
            <div className="signin-card">
                <h4>Welcome Back!</h4>
                <h6 className="signin-subtext">Sign in to continue</h6>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        className="signin-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="signin-input"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    {error && <p className="signin-error-text">{error}</p>}
                    <button type="submit" className="signin-btn" disabled={loading}>
                        {loading ? "Signing In..." : "SIGN IN"}
                    </button>
                    <p className="signin-signup-link">
                        Don't have an account? <Link to="/signup">Create</Link>
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

export default SignIn;
