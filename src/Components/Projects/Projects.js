import React from 'react';
import portfolio1 from '../../img/portfolio-1.jpg';
import portfolio2 from '../../img/portfolio-2.jpg';
import portfolio3 from '../../img/portfolio-3.jpg';
import portfolio4 from '../../img/portfolio-4.jpg';
import portfolio5 from '../../img/portfolio-5.jpg';
import portfolio6 from '../../img/portfolio-6.jpg';

const projects = [
    {
        id: 1,
        category: "UI / UX Design",
        title: "Digital Agency Website Design And Development",
        image: portfolio1,
        link: portfolio1
    },
    {
        id: 2,
        category: "UI / UX Design",
        title: "E-Commerce Website Development",
        image: portfolio2,
        link: portfolio2
    },
    {
        id: 3,
        category: "UI / UX Design",
        title: "Business Landing Page Design",
        image: portfolio3,
        link: portfolio3
    },
    {
        id: 4,
        category: "Graphic Design",
        title: "Brand Identity & Logo Design",
        image: portfolio4,
        link: portfolio4
    },
    {
        id: 5,
        category: "Web Development",
        title: "Portfolio Website",
        image: portfolio5,
        link: portfolio5
    },
    {
        id: 6,
        category: "App Development",
        title: "Mobile App UI Design",
        image: portfolio6,
        link: portfolio6
    },
];

const Projects = () => {
    return (
        <>
            {/* Navbar & Hero Start */}
            <div className="container-xxl py-5 bg-primary hero-header">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-12 text-center">
                            <h1 className="text-white animated slideInDown">Projects</h1>
                            <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Projects</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}

            {/* Projects Start */}
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center">
                            <span></span> Our Projects <span></span>
                        </p>
                        <h1 className="text-center mb-5">Recently Completed Projects</h1>
                    </div>
                    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".uiux">UI / UX Design</li>
                                <li className="mx-2" data-filter=".graphic">Graphic Design</li>
                                <li className="mx-2" data-filter=".web">Web Development</li>
                                <li className="mx-2" data-filter=".app">App Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        {projects.map((project, index) => (
                            <div 
                                key={project.id} 
                                className={`col-lg-4 col-md-6 portfolio-item ${project.category.toLowerCase().replace(/\s+/g, '')} wow fadeInUp`} 
                                data-wow-delay={`${0.1 + index * 0.2}s`}
                            >
                                <div className="rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src={project.image} alt={project.title} />
                                        <div className="portfolio-overlay">
                                            <a 
                                                className="btn btn-square btn-outline-light mx-1" 
                                                href={project.link} 
                                                data-lightbox="portfolio"
                                            >
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="btn btn-square btn-outline-light mx-1" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-light p-4">
                                        <p className="text-primary fw-medium mb-2">{project.category}</p>
                                        <h5 className="lh-base mb-0">{project.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Projects End */}
        </>
    );
};

export default Projects;
