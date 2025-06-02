import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <div className="nav__element">
        <img src="/55555.jpg" alt="Movie Time Logo" className="nav__logo" />
        <h1 className="header"> Movie Time</h1>
      </div>
      <ul className="nav__bar">
        <li>
          <Link to="/" class="nav__link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/movies" class="nav__link">
            Find Your Movie
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
