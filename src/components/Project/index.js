import React from "react";
import "../Project/style.css";

function Project() {
  return (
    <div className="projectDiv container">

      <div className="row" id="row1">

        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/tossup.jpg")}
            className="card-img-top"
            alt="Tossup"
          />
          <div className="card-body">
            <h5 className="card-title">Tossup</h5>
            <a
              href="https://tossup-election-sim.herokuapp.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>{" "}
            <a
              href="https://github.com/ezeume/Tossup"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/carpp.jpg")}
            className="card-img-top"
            alt="CarAmp"
          />
          <div className="card-body">
            <h5 className="card-title">Car Amplify</h5>
            <a
              href="https://hidden-lake-36894.herokuapp.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>{" "}
            <a
              href="https://github.com/ezeume/Car_amplify"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      <div className="row" id="row1">

      <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/fdfndr.jpg")}
            className="card-img-top"
            alt="FoodApp"
          />
          <div className="card-body">
            <h5 className="card-title">Food Finder</h5>
            <a
              href="https://ezeume.github.io/FoodFinder/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>{" "}
            <a
              href="https://github.com/ezeume/FoodFinder"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/empdirectory.jpg")}
            className="card-img-top"
            alt="Employee-Directory"
          />
          <div className="card-body">
            <h5 className="card-title">Employee Directory</h5>
            <a
              href="https://ezeume.github.io/employee-directory/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>{" "}
            <a
              href="https://github.com/ezeume/employee-directory"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      <div className="row" id="row1">

      <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/team-gen.jpg")}
            className="card-img-top"
            alt="TeamGen"
          />
          <div className="card-body">
            <h5 className="card-title">Team Generator</h5>
            <a
              href="https://youtu.be/AFBQUwSQM1o"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>{" "}
            <a
              href="https://github.com/ezeume/team-generator"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/workout.jpg")}
            className="card-img-top"
            alt="Workout-tracker"
          />
          <div className="card-body">
            <h5 className="card-title">Fitness Tracker</h5>
            <a
              href="https://quiet-gorge-37627.herokuapp.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>{" "}
            <a
              href="https://github.com/ezeume/Workout-tracker"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
