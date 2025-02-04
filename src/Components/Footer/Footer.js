import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import 'wowjs/css/libs/animate.css'; // Importing WOW.js for animations
import "../../lib/animate/animate.css"
import "../../lib/animate/animate.min.css"
import portfolio1 from "../../img/portfolio-1.jpg"
import portfolio2 from "../../img/portfolio-2.jpg"
import portfolio3 from "../../img/portfolio-3.jpg"
import portfolio4 from "../../img/portfolio-4.jpg"
import portfolio5 from "../../img/portfolio-5.jpg"
import portfolio6 from "../../img/portfolio-6.jpg"
const Footer = () => {
  return (
    <footer className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Address<span></span></p>
            <p><i className="fa fa-map-marker-alt me-3"></i>House NO. 1059/FF, Sector-21C, Housing Board Colony Faridabad(Hr.)  
            Pin-121001</p>
            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope me-3"></i>rkml.codogenics@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><FaTwitter /></a>
              <a className="btn btn-outline-light btn-social" href=""><FaFacebookF /></a>
              <a className="btn btn-outline-light btn-social" href=""><FaInstagram /></a>
              <a className="btn btn-outline-light btn-social" href=""><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Privacy Policy</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
            <a className="btn btn-link" href="">Career</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
            <div className="row g-2">
              <div className="col-4">
                <img className="img-fluid" src= {portfolio1} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src= {portfolio2} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src= {portfolio3} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src= {portfolio4} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src= {portfolio5} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src= {portfolio6} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
            <div className="position-relative w-100 mt-3">
              <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2">
                <FaPaperPlane className="text-primary fs-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">RKML Codogenics</a>, All Right Reserved.
               <a className="border-bottom"></a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
