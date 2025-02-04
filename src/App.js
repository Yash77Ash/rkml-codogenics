import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import About from "./Components/About/About";
import Facts from "./Components/Facts/Facts";
import Service from "./Components/Service/Service";
import Newsletter from "./Components/NewsLetter/NewsLetter";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonial/Testimonial";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUS";
import OurTeam from "./Components/OurTeam/OurTeam";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import Testimonials from "./Components/Testimonials/Testimonials";
import NotFoundPage from "./Components/404-page-not-found/404";  // Import the 404 page component
import Loading from './Components/Loading/Loading'; // Import the Loading component
import Careers from "./Components/Career/Career";
import { Login, Signup } from  "./Components/Auth/Auth";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading state (1.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // You can adjust this timeout based on your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="container-xxl bg-white p-0">
        {/* Show Loading while the page is loading */}
        {isLoading ? <Loading /> : null}

        {/* Navbar should be on every page */}
        <Navbar />

        <Routes>
          {/* Home Page (Landing page) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Features />
                <About />
                <Facts />
                <Service />
                <Newsletter />
                <Project />
                <Testimonial />
                <Team />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Catch-all route for 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Footer should be on every page */}
        <Footer />
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
