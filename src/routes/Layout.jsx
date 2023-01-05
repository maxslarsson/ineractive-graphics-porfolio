import {
  Outlet,
  NavLink,
} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
      <hr/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}