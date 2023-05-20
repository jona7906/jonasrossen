import "../styles/Portfolio.css";
import PortfolioSVG from "../svgs/icon_portfolio.svg";
import SearchFilterSort from "../components/SearchFilterSort";
import AllProjects from "../components/AllProjects";

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="portfolio_section_01">
        <div className="icon_wrapper_01">
          <img src={PortfolioSVG} alt="portfolio icon"></img>
        </div>
        <div className="text_wrapper_01">Welcome to the Portfolio site</div>
      </div>
      <div className="portfolio_section_02">
        <SearchFilterSort></SearchFilterSort>
      </div>
      <div className="portfolio_section_03">
        <AllProjects></AllProjects>
      </div>
    </div>
  );
}

export default Portfolio;
