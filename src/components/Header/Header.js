import { NavLink } from "react-router-dom";
import Logo from "../../img/logo/logo";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drumming"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Drumming Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
