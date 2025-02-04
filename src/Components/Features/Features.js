import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../lib/animate/animate.css"
import "../../lib/animate/animate.min.css"
const featuresData = [
  {
    icon: "fa-mail-bulk",
    title: "Digital Marketing",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    delay: "0.1s"
  },
  {
    icon: "fa-search",
    title: "SEO & Backlinks",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    delay: "0.3s"
  },
  {
    icon: "fa-laptop-code",
    title: "Design & Development",
    description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    delay: "0.5s"
  }
];

const Features = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-4 wow fadeInUp" data-wow-delay={feature.delay}>
              <div className="feature-item bg-light rounded text-center p-4">
                <i className={`fa fa-3x ${feature.icon} text-primary mb-4`}></i>
                <h5 className="mb-3">{feature.title}</h5>
                <p className="m-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
