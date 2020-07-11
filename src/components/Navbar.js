import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Logo/logo.jpg";
function Navbar(props) {
  return (
    <div className="d-flex justify-content-center">
      <nav class="navbar navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            width="250"
            height="100"
            className="d-inline-block align-top h-25 w-auto mt-n5"
            alt=""
          />
        </a>
        <ul class="nav justify-content-center mt-n3">
          <li class="nav-item">
            <a class="nav-link" href="#">
              For you
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Baby
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
