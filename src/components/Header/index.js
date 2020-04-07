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
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
