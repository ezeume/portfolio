import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about">Projects</Link>
      </li>

      <li className="nav-item">
        <Link
          to="/contact">Contact</Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
