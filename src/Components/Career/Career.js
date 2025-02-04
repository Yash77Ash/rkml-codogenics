import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import "./Career.css";
const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const jobListings = [
    {
      title: "Frontend Developer",
      shortDescription:
        "We are looking for a skilled Frontend Developer to join our team. Create user-friendly web applications and collaborate with the design team.",
      moreInfo: {
        jobDescription: [
          "Develop and maintain user-facing features using React.js",
          "Ensure the technical feasibility of UI/UX designs",
          "Collaborate with other team members and stakeholders",
          "Optimize applications for maximum speed and scalability",
        ],
        qualifications: [
          "Bachelor’s degree in Computer Science or related field",
          "Strong proficiency in JavaScript and React.js",
          "Experience with HTML5, CSS3, and responsive design",
          "Experience with version control tools like Git",
        ],
        benefits: [
          "Competitive salary",
          "Health insurance",
          "Paid time off and holidays",
          "Opportunity for career growth",
        ],
      },
    },
    {
      title: "Backend Developer",
      shortDescription:
        "We are seeking a Backend Developer to build scalable server-side applications using Node.js and MongoDB.",
      moreInfo: {
        jobDescription: [
          "Design and implement server-side logic using Node.js",
          "Develop and maintain database systems using MongoDB",
          "Ensure high performance and responsiveness of the applications",
          "Collaborate with frontend developers to integrate APIs",
        ],
        qualifications: [
          "Proven experience with Node.js and Express.js",
          "Experience with MongoDB and other NoSQL databases",
          "Familiarity with cloud platforms (AWS, Azure)",
          "Understanding of API design and integration",
        ],
        benefits: [
          "Competitive salary",
          "Health insurance",
          "Flexible working hours",
          "Collaborative and innovative environment",
        ],
      },
    },
    {
      title: "UI/UX Designer",
      shortDescription:
        "We need a talented UI/UX Designer to create user-friendly and visually appealing designs for web and mobile applications.",
      moreInfo: {
        jobDescription: [
          "Design and prototype user interfaces for web and mobile applications",
          "Conduct user research and usability testing",
          "Create wireframes, mockups, and interactive prototypes",
          "Ensure designs are intuitive, user-friendly, and visually appealing",
        ],
        qualifications: [
          "Proficiency in design tools like Adobe XD, Figma, or Sketch",
          "Experience in user-centered design principles",
          "Strong portfolio demonstrating design experience",
          "Experience with responsive design",
        ],
        benefits: [
          "Competitive salary",
          "Health and dental benefits",
          "Flexible work-from-home options",
          "Creative and collaborative team",
        ],
      },
    },
  ];

  return (
    <div>
     
      {/* Hero Header Section */}
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated slideInDown">Careers</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: "90px" }} />
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
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Careers
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-12 text-center">
              <p className="section-title text-secondary">
                Join Our Team<span></span>
              </p>
              <h1 className="mb-5">
                Explore Job Opportunities and Build Your Future with Us
              </h1>
              <p className="mb-4">
                At our company, we’re looking for innovative and passionate
                people who want to make an impact. Check out our open positions
                and apply to join our dynamic team!
              </p>
            </div>
          </div>

          {/* Job Listings (Vertical Stack) */}
          <div className="d-flex flex-column">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="job-card p-4 mb-4 border rounded-3"
                style={{
                  position: "relative",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="mb-3">{job.title}</h3>
                <p>{job.shortDescription}</p>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="link"
                    onClick={() => handleShow(job)}
                    className="btn-sm"
                  >
                    View More
                  </Button>
                  <a
                    href="#"
                    className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for View More */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        className="custom-modal"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header custom-modal-header">
              <h5 className="modal-title">{selectedJob?.title}</h5>
              <Button variant="close" onClick={handleClose} className="btn-close"></Button>
            </div>
            <div className="modal-body">
              <h5>Job Description</h5>
              <ul>
                {selectedJob?.moreInfo.jobDescription.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <h5>Qualifications</h5>
              <ul>
                {selectedJob?.moreInfo.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>

              <h5>Benefits</h5>
              <ul>
                {selectedJob?.moreInfo.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <a href="#" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </Modal>

      {/* Background Blur Effect */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
            filter: "blur(5px)", // Apply the blur effect to the background
          }}
        />
      )}
    </div>
  );
};

export default Careers;
