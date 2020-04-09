import React from "react";
import "../Header/style.css";



function Header() {
  return (
    <>
      <header className="header">
        <h1 className="title">Nelson Ezeume</h1>
      </header>
      <div className="card text-center">
        <div className="card-header">
          <ul class="nav justify-content-end">
          <li class="nav-item active">
                        <a class="nav-link" href="index.html" target="_target">About <span
                                class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.linkedin.com/in/nelson-ezeume-93b750a5/"
                            target="_blank">Linkedin <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://github.com/ezeume" target="_blank">GitHub <span
                                class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="Resume.pdf" target="_blank">Resume<span
                                class="sr-only">(current)</span></a>
                    </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
