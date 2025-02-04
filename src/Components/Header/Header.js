import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../img/hero.png"; // Adjust the path based on your project structure
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../lib/animate/animate.css"
import "../../lib/animate/animate.min.css"

const Header = () => {
  return (
    <div className="container-xxl bg-primary hero-header">
      <div className="container px-lg-5">
        <div className="row g-5 align-items-end">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-white mb-4 animated slideInDown">
              Innovative digital solutions by a team of creative experts
            </h1>
            <p className="text-white pb-3 animated slideInDown">
              We specialize in delivering high-quality solutions with a focus on innovation and creativity. Our team is committed to creating impactful experiences that drive results and exceed expectations."
            </p>
            <Link to="/read-more" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">
              Read More
            </Link>
            <Link to="/contact" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">
              Contact Us
            </Link>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <img className="img-fluid animated zoomIn" src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
