import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <nav className=" navbar navbar-expand-lg navbar-dark navbar-custom">
      <Link className="navbar-brand" to="/">
        Quiz
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link" to="/">

              Home
            <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link " to="/instructions">
              Instructions
          </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link " to="/about">
              About
          </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link " to="/quiz">
              Quiz
          </Link>
          </li>
        </ul>
      </div>

    </nav>

  );
};

export default Header;