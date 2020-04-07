import React from "react";
import "../About/style.css";

function About() {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="..." class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">About me</h5>
            <p class="card-text">
              My name is Nelson Ezeume. I am originally from Nigeria and
              currently living in Norristown, Pennsylvania. I am a self taught,
              design thinking Front-end developer. I have a bachelors degree in
              Industrial physics from the University of science and technology
              Enugu, Nigeria..
            </p>
            <p class="card-text">
              <small class="text-muted">
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
