import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../lib/animate/animate.css";
import "../../lib/animate/animate.min.css";
import CounterUp from "react-countup"; // Import CounterUp component
import { InView } from "react-intersection-observer"; // Import InView from react-intersection-observer

const Facts = () => {
  return (
    <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref}>
                    {inView && <CounterUp end={10} delay={5} duration={2} />}
                  </div>
                )}
              </InView>
            </h1>
            <p className="text-white mb-0">Years Experience</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref}>
                    {inView && <CounterUp end={20} delay={5} duration={2} />}
                  </div>
                )}
              </InView>
            </h1>
            <p className="text-white mb-0">Team Members</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <i className="fa fa-users fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref}>
                    {inView && <CounterUp end={156} delay={5} duration={2} />}
                  </div>
                )}
              </InView>
            </h1>
            <p className="text-white mb-0">Satisfied Clients</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <i className="fa fa-check fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref}>
                    {inView && <CounterUp end={256} delay={5} duration={2} />}
                  </div>
                )}
              </InView>
            </h1>
            <p className="text-white mb-0">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
