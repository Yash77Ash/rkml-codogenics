
import React, { useState, useEffect } from "react";
import testimonial1 from '../../img/testimonial-1.jpg';
import testimonial2 from '../../img/testimonial-2.jpg';
import testimonial3 from '../../img/testimonial-3.jpg';
import { Link } from 'react-router-dom';
const testimonials = [
    {
      id: 1,
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
      name: "Client Name 1",
      profession: "Profession 1",
      image: testimonial1,
    },
    {
      id: 2,
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
      name: "Client Name 2",
      profession: "Profession 2",
      image: testimonial2,
    },
    {
      id: 3,
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
      name: "Client Name 3",
      profession: "Profession 3",
      image: testimonial3,
    },
  ];
const Testimonials = () => {
     const [currentTestimonial, setCurrentTestimonial] = useState(0);
        const [direction, setDirection] = useState(""); // To track the direction of sliding
        const [animationClass, setAnimationClass] = useState("");
      
        useEffect(() => {
          const interval = setInterval(() => {
            setDirection("next");
            setAnimationClass("slide-out");
            setTimeout(() => {
              setCurrentTestimonial((prev) => (prev + 2) % testimonials.length);
              setAnimationClass("slide-in");
            }, 500);
          }, 5000);
      
          return () => clearInterval(interval);
        }, []);
      
        const handlePrev = () => {
          setDirection("prev");
          setAnimationClass("slide-out");
          setTimeout(() => {
            setCurrentTestimonial((prev) => (prev - 2 + testimonials.length) % testimonials.length);
            setAnimationClass("slide-in");
          }, 500);
        };
      
        const handleNext = () => {
          setDirection("next");
          setAnimationClass("slide-out");
          setTimeout(() => {
            setCurrentTestimonial((prev) => (prev + 2) % testimonials.length);
            setAnimationClass("slide-in");
          }, 500);
        };
      
  return (
    <>
      {/* Hero Header Start */}
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated slideInDown">Testimonial</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="#">
                      Pages
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Testimonial
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Header End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 px-lg-5">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Testimonial<span></span>
          </p>
          <h1 className="text-center mb-5">What Say Our Clients!</h1>
  
          {/* Displaying two testimonials at once */}
          <div className="row">
            <div className="col-lg-6">
              <div className={`testimonial-item bg-light rounded my-4 ${animationClass} ${direction === "next" ? "slide-in-right" : "slide-in-left"}`}>
                <p className="fs-5">
                  <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    style={{ width: "65px", height: "65px" }}
                  />
                  <div className="ps-4">
                    <h5 className="mb-1">{testimonials[currentTestimonial].name}</h5>
                    <span>{testimonials[currentTestimonial].profession}</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className={`testimonial-item bg-light rounded my-4 ${animationClass} ${direction === "next" ? "slide-in-left" : "slide-in-right"}`}>
                <p className="fs-5">
                  <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>
                  {testimonials[(currentTestimonial + 1) % testimonials.length].text}
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={testimonials[(currentTestimonial + 1) % testimonials.length].image}
                    alt={testimonials[(currentTestimonial + 1) % testimonials.length].name}
                    style={{ width: "65px", height: "65px" }}
                  />
                  <div className="ps-4">
                    <h5 className="mb-1">{testimonials[(currentTestimonial + 1) % testimonials.length].name}</h5>
                    <span>{testimonials[(currentTestimonial + 1) % testimonials.length].profession}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation Buttons with < and > */}
          <div className="text-center">
            <button
              className="btn btn-primary me-2"
              onClick={handlePrev}
              style={{
                fontSize: "30px",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                padding: "0",
              }}
            >
              &lt;
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={handleNext}
              style={{
                fontSize: "30px",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                padding: "0",
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Testimonials;
