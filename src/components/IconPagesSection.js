import InternshipSVG from "../svgs/icon_internship.svg";
import PortfolioSVG from "../svgs/icon_portfolio.svg";
import ContactSVG from "../svgs/icon_contact.svg";
import { Link } from "react-router-dom";

function IconPagesSection() {
  return (
    <section className="icon_pages_section">
      <Link to="/internship">
        <div className="intern_section_wrapper_01">
          {/*  <h2>The internship</h2> */}{" "}
          <img src={InternshipSVG} alt="internship icon"></img>
          <p></p>
        </div>{" "}
      </Link>
      <Link to="/portfolio">
        {" "}
        <div className="portfolio_section_wrapper_01">
          {/* <h2>The Portfolio</h2> */}

          <img src={PortfolioSVG} alt="porfolio icon"></img>

          <p></p>
        </div>{" "}
      </Link>
      <Link to="/contact">
        {" "}
        <div className="contact_section_wrapper_01">
          {/*  <h2>Get in contact</h2> */}
          <img src={ContactSVG} alt="Contact icon"></img>
          <p></p>{" "}
        </div>
      </Link>
    </section>
  );
}

export default IconPagesSection;
