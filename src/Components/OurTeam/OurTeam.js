import React from "react";
import TeamImage1 from "../../img/team-1.jpg";
import TeamImage2 from "../../img/team-2.jpg";
import TeamImage3 from "../../img/team-3.jpg";

const OurTeam = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: TeamImage1 },
    { name: "Jessica Brown", role: "Web Designer", image: TeamImage2 },
    { name: "Tony Johnson", role: "SEO Expert", image: TeamImage3 },
    { name: "John Doe", role: "CEO & Founder", image: TeamImage2 },
    { name: "Jessica Brown", role: "Web Designer", image: TeamImage3 },
    { name: "Tony Johnson", role: "SEO Expert", image: TeamImage1 },
  ];

  return (
    <>
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated slideInDown">Our Team</h1>
              <hr
                className="bg-white mx-auto mt-0"
                style={{ width: "90px" }}
              />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Our Team
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Our Team<span></span>
            </p>
            <h1 className="text-center mb-5">Our Team Members</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img className="img-fluid rounded-circle mb-4" src={member.image} alt={member.name} />
                    <h5>{member.name}</h5>
                    <span>{member.role}</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
