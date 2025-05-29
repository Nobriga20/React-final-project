import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
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
