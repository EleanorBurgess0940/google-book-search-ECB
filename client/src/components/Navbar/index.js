import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav>
      <div class="wrapper">
        <div class="navbar navbar-light bg-light">
          <div id="main-content">
            <a class="navbar-brand nav-link" href="home.html">
              <h2>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Google Books
                </Link>
              </h2>
            </a>
          </div>
          <div id="sidebar">
            <ul class="navbar list-group list-group-horizontal">
              <li class="nav-item active">
                <Link
                  to="/search"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/search"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Search
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/saved"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/saved"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
