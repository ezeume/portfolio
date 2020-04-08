import React from "react";
import "../Project/style.css";


function Project() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="subheader-text">PORTFOLIO</h2>
        </div>
      </div>
      
      <div className="card col-lg-4 col-12 md-5 mb-4 mt-4 my-2 mx-2 mt-4">
        <img src={require("../../Images/foodfinder.jpg")} className="card-img-top" alt="FoodApp" />
        <div className="card-body">
          <h5 className="card-title">Food Finder</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          {" "}
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card col-lg-4 col-12 md-5 mb-4 mt-4 my-2 mx-2 mt-4">
        <img src={require("../../Images/carApp.jpg")} className="card-img-top" alt="CarAmp" />
        <div className="card-body">
          <h5 className="card-title">Car Amplify</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          {" "}
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card col-lg-4 col-12 md-5 mb-4 mt-4 my-2 mx-2 mt-4">
        <img src={require("../../Images/team-gen.jpg")} className="card-img-top" alt="TeamGen" />
        <div className="card-body">
          <h5 className="card-title">Burger Logger</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          {" "}
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card col-lg-4 col-12 md-5 mb-4 mt-4 my-2 mx-2 mt-4">
        <img src={require("../../Images/burger.png")} className="card-img-top" alt="Burger" />
        <div className="card-body">
          <h5 className="card-title">Team Generator</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          {" "}
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card col-lg-4 col-12 md-5 mb-4 mt-4 my-2 mx-2 mt-4">
        <img src={require("../../Images/empdirectory.jpg")} className="card-img-top" alt="Employee-Directory" />
        <div className="card-body">
          <h5 className="card-title">Employee Directory</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          {" "}
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card col-lg-4 col-12 md-5 mb-4 mt-4 my-2 mx-2 mt-4">
        <img src={require("../../Images/workout.jpg")} className="card-img-top" alt="Workout-tracker" />
        <div className="card-body">
          <h5 className="card-title">Fitness Tracker</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          {" "}
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
