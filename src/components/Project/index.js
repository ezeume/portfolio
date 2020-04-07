import React from "react";
import "../Project/style.css";

function Project(props) {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <h2 class="subheader-text">PORTFOLIO</h2>
        </div>
      </div>
      
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a href="#" className="btn btn-primary">
            Demo
          </a>
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
