import React from "react";
import "../About/style.css";
// import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="row">
        <div className="col-12"></div>
      </div>
      <div className="card mb-4">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={require("../../Images/me.jpg")}
              className="card-img"
              alt="Me"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" id="about">
                About me
              </h5>
              <p className="card-text1" id="sub1">
                My name is Nelson Ezeume. I am originally from Nigeria and
                I live in Norristown, Pennsylvania. I am a self
                taught, design thinking Front-end developer. I have a bachelors
                degree in Industrial physics from the University of science and
                technology Enugu, Nigeria. 
              </p>
              <p className="card-text2" id="sub2">
                I am very familiar and
                experienced with Web application frameworks and have worked with
                a good number of successful development teams. Values I hold
                high are reliability, authenticity, loyalty and helping others
                achieve their success. Which is why I enjoy to see a project
                through to the end. Not only do I believe in creating beautiful
                software but also making it reliable and user friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
      </div>
    </>
  );
}

export default About;
