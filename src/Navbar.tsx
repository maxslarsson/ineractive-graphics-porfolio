import {Link, Outlet} from "react-router-dom";
import * as React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <hr/>

      <Outlet/>
    </div>
  );
}

export default Navbar;