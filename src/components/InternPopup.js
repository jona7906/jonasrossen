import "../styles/InternPopup.css";

import ExitButtonSVG from "../svgs/exit_button.svg";

import { useState } from "react";

import { Link } from "react-router-dom";

function InternPopup() {
  const [active, setActive] = useState(true);

  function closeItem() {
    setActive(false);
  }

  return (
    <div className={active ? "InternPopupWrapper" : "ExitInternPopup"}>
      <div className="popup_triangle"></div>
      <div className="InternPopup">
        {/* <div className="popup_container_background">
        <img src={PopupContainer} alt="popup container background"></img>
      </div> */}
        <div className="popup_exit_button">
          <button onClick={closeItem}>
            <img src={ExitButtonSVG} alt="close button"></img>
          </button>
        </div>
        <div className="popup_text_wrapper">
          <h2>WELCOME! ARE YOU LOOKING FOR AN INTERN? LOOK NO FURTHER!</h2>
          <p>
            My name is Jonas Rossen, currently studying{" "}
            <a
              href="https://kea.dk/en/programmes/top-up-bachelor-degree/web-development"
              alt="KEA, web development information"
            >
              “Web Development” at “KEA - Copenhagen School of Design and
              Technology”
            </a>
            . I'm looking for a 10 week internship, where I can test and grow my
            skills as an aspiring “Fullstack-developer”. Take a look around and
            learn more about{" "}
            <Link to="/about" alt="information">
              who i am
            </Link>{" "}
            , see my current{" "}
            <Link to="/portfolio" alt="portfolio">
              portfolio
            </Link>{" "}
            and as soon you're convinced that I'm the one you need{" "}
            <Link to="/contact" alt="contact me">
              contact me!{" "}
            </Link>
          </p>
        </div>
        <div className="intern_popup-buttons">
          <Link
            to="/internship"
            className="intern_popup_internship_button"
            alt="internship"
          >
            About the internship
          </Link>
          <Link
            className="intern_popup_contact_button"
            to="/contact"
            alt="contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InternPopup;
