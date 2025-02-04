import "../../css/bootstrap.min.css";
import "../../css/style.css";
import portfolio1 from '../../img/portfolio-1.jpg';
import portfolio2 from '../../img/portfolio-2.jpg';
import portfolio3 from '../../img/portfolio-3.jpg';
import portfolio4 from '../../img/portfolio-4.jpg';
import portfolio5 from '../../img/portfolio-5.jpg';
import portfolio6 from '../../img/portfolio-6.jpg';
import "../../lib/animate/animate.css"
import "../../lib/animate/animate.min.css"
import "../../lib/lightbox/css/lightbox.css"
import "../../lib/lightbox/css/lightbox.min.css"

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
      title: "Digital Agency Website Design And Development",
      image: portfolio2,
      link: portfolio2
    },
    {
        id: 1,
        category: "UI / UX Design",
        title: "Digital Agency Website Design And Development",
        image: portfolio3,
        link: portfolio3
      },
      {
        id: 2,
        category: "UI / UX Design",
        title: "Digital Agency Website Design And Development",
        image: portfolio4,
        link: portfolio4
      },
      {
        id: 1,
        category: "UI / UX Design",
        title: "Digital Agency Website Design And Development",
        image: portfolio5,
        link: portfolio5
      },
      {
        id: 2,
        category: "UI / UX Design",
        title: "Digital Agency Website Design And Development",
        image: portfolio6,
        link: portfolio6
      },
        
];


  
  const Projects = () => {
    return (
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Our Projects<span></span>
            </p>
            <h1 className="text-center mb-5">Recently Completed Projects</h1>
          </div>
  
          {/* Portfolio Filter */}
          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="mx-2 active" data-filter="*">All</li>
                <li className="mx-2" data-filter=".first">Web Design</li>
                <li className="mx-2" data-filter=".second">Graphic Design</li>
              </ul>
            </div>
          </div>
  
          {/* Portfolio Items */}
          <div className="row g-4 portfolio-container">
            {projects.map((project) => (
              <div className={`col-lg-4 col-md-6 portfolio-item ${project.category.toLowerCase().replace(" ", "-")} wow fadeInUp`} data-wow-delay="0.1s" key={project.id}>
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href={project.link} data-lightbox="portfolio">
                        <i className="fa fa-eye"></i>
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href="">
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
    );
  };
  
  export default Projects;
  