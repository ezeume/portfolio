import React from "react";
import "../Header/style.css";



function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Nelson Ezeume</h1>
      </header>
      <div className="card text-center">
        <div className="card-header">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                LinkedIn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                GitHub
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
