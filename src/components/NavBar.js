import Logo from "../svgs/background_logo.svg";
import Burger from "../svgs/icon_burger.svg";
import InternIcon from "../svgs/icon_internship.svg";
import ContactIcon from "../svgs/icon_contact.svg";
import PortfolioIcon from "../svgs/icon_portfolio.svg";
import AboutIcon from "../svgs/icon_about.svg";
import { Link } from "react-router-dom";

import { useState } from "react";

function NavBar() {
  const [activeBurger, setActiveBurger] = useState(false);

  function closeItem() {
    setActiveBurger(false);
  }

  function openItem() {
    setActiveBurger(true);
  }

  function handleBurger() {
    if (!activeBurger) {
      openItem();
    } else {
      closeItem();
    }
  }
  return (
    <nav>
      <div className="NavBar">
        <div className="left-header">
          <Link to="/">
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
          <Link to="/internship" onClick={handleBurger}>
            Internship <img src={InternIcon} alt="intern-icon" />
          </Link>
          <Link to="/portfolio" onClick={handleBurger}>
            Portfolio <img src={PortfolioIcon} alt="portfolio-icon" />
          </Link>
          <Link to="/about" onClick={handleBurger}>
            About <img src={AboutIcon} alt="about-icon" />
          </Link>
          <Link to="/contact" onClick={handleBurger}>
            Contact <img src={ContactIcon} alt="contact-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
