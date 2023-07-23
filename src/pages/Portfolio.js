import "../styles/Portfolio.css";
import PortfolioSVG from "../svgs/icon_portfolio.svg";
/* import SearchFilterSort from "../components/SearchFilterSort"; */
import AllProjects from "../components/AllProjects";
import "../styles/SearchFilterSort.css";
import SearchButton from "../svgs/search_button.svg";
import React, { useState } from "react";

function Portfolio(props) {
  const [search, setSearch] = useState("");

  if (!props) {
    return null;
  }
  const portfolio_intro = props.data[0].introductions.find(
    (intro) => intro.introduction_name === "portfolio"
  );

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  console.log(portfolio_intro);
  return (
    <div className="Portfolio">
      <div className="portfolio_section_01">
        <div className="icon_wrapper_01">
          <img src={PortfolioSVG} alt="portfolio icon"></img>
        </div>
        <div className="text_wrapper_01">
          <h1>{portfolio_intro.introduction_title}</h1>
          {portfolio_intro.introduction_text?.map((text) => {
            return <p>{text}</p>;
          })}
        </div>
      </div>
      <div className="portfolio_section_02">
        <div className="SearchFilterSort">
          <div className="search_wrapper_01">
            <img src={SearchButton} alt="search icon"></img>
            <input
              class="search_input"
              placeholder="Search..."
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="sort_filter_wrapper_01">
            {/* <div className="sort_wrapper_01">FILTER</div>
            <div className="filter_wrapper_01">SORT</div> */}
          </div>
        </div>
      </div>
      <div className="portfolio_section_03">
        <AllProjects search_key={search}></AllProjects>
      </div>
    </div>
  );
}

export default Portfolio;
