import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <div>Routing</div>
      <nav className={s.nav}>
        <ul>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className={buildLinkClass} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
