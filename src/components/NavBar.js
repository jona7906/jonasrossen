import Logo from "../svgs/background_logo.svg";
import Burger from "../svgs/icon_burger.svg";

import { Link } from "react-router-dom";

import "../styles/Header.css";
function NavBar() {
  return (
    <nav>
      <div className="NavBar">
        <div className="left-header">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="mid-header"></div>

        <div className="right-header">
          <Link to="/internship">Internship</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <img src={Burger} alt="Burger menu"></img>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
