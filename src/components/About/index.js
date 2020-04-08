import React from "react";
import "../About/style.css";

function About() {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="..." className="card-img" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" id="about">About me</h5>
            <p className="card-text">
              My name is Nelson Ezeume. I am originally from Nigeria and
              currently living in Norristown, Pennsylvania. I am a self taught,
              design thinking Front-end developer. I have a bachelors degree in
              Industrial physics from the University of science and technology
              Enugu, Nigeria..
            </p>
            <p className="card-text">
              <small className="text-muted">
                I am currently enrolled in University of Pennsylvania LPS
                Full-stack development bootcamp. I am very familiar and
                experienced with Web application frameworks and have worked with
                a good number of successful development teams. Values I hold
                high are reliability, authenticity, loyalty and helping others
                achieve their success. Which is why I enjoy to see a project
                through to the end. Not only do I believe in creating beautiful
                software but also making it reliable and user friendly.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
