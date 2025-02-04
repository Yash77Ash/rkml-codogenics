import React from "react";
import AboutImage from "../../img/about.png";
import "../../lib/animate/animate.css";
import "../../lib/animate/animate.min.css";
import Features from "../Features/Features";
import Facts from "../Facts/Facts";
import Team from "../Team/Team";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Header Section */}
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated slideInDown">About Us</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">Pages</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Features />
      
      {/* Main About Section */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary">
                About Us<span></span>
              </p>
              <h1 className="mb-5">
                Digital solution with 10 years of experience
              </h1>
              <p className="mb-4">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
                sit clita duo justo eirmod magna dolore erat amet
              </p>

              {/* Skills Section */}
              <div className="skills">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Digital Marketing</p>
                    <p className="mb-2">85%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">SEO & Backlinks</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Design & Development</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                {/* Additional Skill */}
                <div className="skill mb-4" data-wow-delay="0.1s">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Design & Development</p>
                    <p className="mb-2">70%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      aria-valuenow="70"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <a href="#" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">
                Read More
              </a>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid animated zoomIn"
                data-wow-delay="0.5s"
                src={AboutImage}
                alt="About"
              />
            </div>
          </div>
        </div>
      </div>
      <Facts />
      <Team />
    </div>
  );
};

export default AboutUs;
