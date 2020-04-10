import React from "react";
import "../Header/style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="title">Nelson Ezeume</h1>
      </header>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav justify-content-end">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="Project">
                Projects <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="Contact">
                Contact <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/nelson-ezeume-93b750a5/"
                target="_blank"
              >
                Linkedin <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://github.com/ezeume"
                target="_blank"
              >
                GitHub <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="Resume.pdf" target="_blank">
                Resume<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
