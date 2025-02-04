import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../lib/animate/animate.css";
import "../../lib/animate/animate.min.css";
import "../../lib/lightbox/css/lightbox.min.css";
import "../../lib/owlcarousel/assets/owl.carousel.min.css";
import "../../lib/lightbox/css/lightbox.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const location = useLocation(); // Get the current route

  // Handle scroll event to toggle sticky navbar
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 45);  // Navbar becomes sticky after 45px scroll
  };

  // Add event listener for scroll when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-xxl position-relative p-0">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? "sticky-navbar" : ""}`}
      >
        <Link to="/" className="navbar-brand p-0">
          <h1 className={`m-0 ${isSticky ? 'text-primary' : ''}`}>RKML CODOGENICS</h1> {/* Apply dynamic class */}
        </Link>




        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link 
              to="/" 
              className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""} ${isSticky ? "text-black" : ""}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""} ${isSticky ? "text-black" : ""}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`nav-item nav-link ${location.pathname === "/services" ? "active" : ""} ${isSticky ? "text-black" : ""}`}
            >
              Service
            </Link>
            <Link 
              to="/projects" 
              className={`nav-item nav-link ${location.pathname === "/projects" ? "active" : ""} ${isSticky ? "text-black" : ""}`}
            >
              Project
            </Link>
            <Link 
              to="/contact" 
              className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""} ${isSticky ? "text-black" : ""}`}
            >
              Contact
            </Link>
            {/* Dropdown */}
            <div className="nav-item dropdown d-flex align-items-center">
              <button
                className={`nav-link dropdown-toggle text-white ${isDropdownOpen ? "bg-primary" : "btn-primary me-2"} border-0 px-3 py-2 rounded`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  transition: "background-color 0.3s ease-in-out",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                More
              </button>
              <div className={`dropdown-menu m-0 ${isDropdownOpen ? "show" : ""}`}>
                <Link to="/team" className={`dropdown-item ${location.pathname === "/team" ? "active" : ""}`}>
                  Our Team
                </Link>
                <Link to="/testimonial" className={`dropdown-item ${location.pathname === "/testimonial" ? "active" : ""}`}>
                  Testimonial
                </Link>
                <Link to="/Career" className={`dropdown-item ${location.pathname === "/Career" ? "active" : ""}`}>
                Careers
                </Link>
              </div>
            </div>
          </div>

          <Link 
            to="/signup" 
            className={`btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block ${isSticky ? "btn-get-started" : ""}`}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
