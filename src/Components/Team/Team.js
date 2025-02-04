import React from "react";
import team1 from "../../img/team-1.jpg";
import team2 from "../../img/team-2.jpg";
import team3 from "../../img/team-3.jpg";
import "../../lib/animate/animate.css"
import "../../lib/animate/animate.min.css"

// Team Member data
const teamMembers = [
    {
        name: "John Doe",
        position: "CEO & Founder",
        image: team1,
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
    },
    {
        name: "Jessica Brown",
        position: "Web Designer",
        image: team2,
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
    },
    {
        name: "Tony Johnson",
        position: "SEO Expert",
        image: team3,
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
    }
];

const Team = () => {
    return (
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
                                    <span>{member.position}</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href={member.facebook}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href={member.twitter}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href={member.instagram}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href={member.linkedin}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
