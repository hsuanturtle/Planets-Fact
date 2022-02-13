import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ planets }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          The PLANETS
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-target="#navbarNav"
          data-bs-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/earth">
                Earth
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/jupiter">
                Jupiter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/mars">
                Mars
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/mercury">
                Mercury
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/neptune">
                Neptune
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/saturn">
                Saturn
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/uranus">
                Uranus
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/venus">
                Venus
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
