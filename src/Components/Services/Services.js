import React from "react";
import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../lib/animate/animate.css";
import "../../lib/animate/animate.min.css";
import Newsletter from "../NewsLetter/NewsLetter";
import Testimonial from "../Testimonial/Testimonial";

const servicesData = [
  { icon: "fa-search", title: "SEO Optimization" },
  { icon: "fa-laptop-code", title: "Web Design" },
  { icon: "fab fa-facebook-f", title: "Social Media Marketing" },
  { icon: "fa-mail-bulk", title: "Email Marketing" },
  { icon: "fa-thumbs-up", title: "PPC Advertising" },
  { icon: "fab fa-android", title: "App Development" },
];

const Services = () => {
  return (
    <>
      {/* Hero Header */}
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated slideInDown">Service</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: "90px" }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/pages">Pages</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Service
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Our Services<span></span>
            </p>
            <h1 className="text-center mb-5">What Solutions We Provide</h1>
          </div>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index % 3)}s`}>
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className={`fa ${service.icon} fa-2x`}></i>
                  </div>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link className="btn btn-square" to="/services">
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newsletter/>
      <Testimonial/>
    </>
  );
};

export default Services;
