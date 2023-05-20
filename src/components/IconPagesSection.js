import InternshipSVG from "../svgs/icon_internship.svg";
import PortfolioSVG from "../svgs/icon_portfolio.svg";
import ContactSVG from "../svgs/icon_contact.svg";
function IconPagesSection() {
  return (
    <section className="icon_pages_section">
      <div className="intern_section_wrapper_01">
        {/*  <h2>The internship</h2> */}
        <img src={InternshipSVG} alt="internship icon"></img>

        <p></p>
      </div>
      <div className="portfolio_section_wrapper_01">
        {/* <h2>The Portfolio</h2> */}
        <img src={PortfolioSVG} alt="porfolio icon"></img>

        <p></p>
      </div>
      <div className="contact_section_wrapper_01">
        {/*  <h2>Get in contact</h2> */}
        <img src={ContactSVG} alt="Contact icon"></img>

        <p></p>
      </div>
    </section>
  );
}

export default IconPagesSection;
