import Logo from "../svgs/background_logo.svg";
import Burger from "../svgs/icon_burger.svg";
import InternIcon from "../svgs/icon_internship.svg";
import ContactIcon from "../svgs/icon_contact.svg";
import PortfolioIcon from "../svgs/icon_portfolio.svg";
import AboutIcon from "../svgs/icon_about.svg";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const location = useLocation(); // Get the current location of the app
  const [activeBurger, setActiveBurger] = useState(false);

  function closeItem() {
    setActiveBurger(false);
  }

  function openItem() {
    setActiveBurger(true);
  }

  function handleBurger() {
    let dimensionWidth = getCurrentDimension().width;
    if (dimensionWidth < 760) {
      if (!activeBurger) {
        openItem();
      } else {
        closeItem();
      }
    }
  }

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // Function to check if a given link is active based on its `to` prop
  function isLinkActive(path) {
    return location.pathname === path;
  }

  return (
    <nav>
      <div className="NavBar">
        <div className="left-header">
          <Link
            to="/"
            onClick={closeItem}
            className={isLinkActive("/") ? "active" : ""}
          >
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="mid-header"></div>
        <div
          className={activeBurger ? "burger_wrapper_active" : "burger_wrapper"}
        >
          <img
            onClick={handleBurger}
            className="burger"
            src={Burger}
            alt="Burger menu"
          ></img>
        </div>

        <div className={activeBurger ? "right-header-active" : "right-header"}>
          <Link
            to="/internship"
            onClick={handleBurger}
            className={isLinkActive("/internship") ? "active" : ""}
          >
            Internship <img src={InternIcon} alt="intern-icon" />
          </Link>
          <Link
            to="/portfolio"
            onClick={handleBurger}
            className={isLinkActive("/portfolio") ? "active" : ""}
          >
            Portfolio <img src={PortfolioIcon} alt="portfolio-icon" />
          </Link>
          <Link
            to="/about"
            onClick={handleBurger}
            className={isLinkActive("/about") ? "active" : ""}
          >
            About <img src={AboutIcon} alt="about-icon" />
          </Link>
          <Link
            to="/contact"
            onClick={handleBurger}
            className={isLinkActive("/contact") ? "active" : ""}
          >
            Contact <img src={ContactIcon} alt="contact-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
