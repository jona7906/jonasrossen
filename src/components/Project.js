import CodingLanguage from "./CodingLanguage.js";
import DisplayProjectIcon from "./DisplayProjectIcon.js";
import "../styles/Project.css";
import { Link } from "react-router-dom";

function Project(props) {
  if (!props.project) {
    return null;
  } else {
    return (
      <Link to={"/" + props.project.project_name}>
        <div className="portfolio_project_wrapper">
          <div className="project_coding_languages_wrapper">
            <div className="project_coding_languages">
              {props.project.project_coding_languages?.map((cl) => {
                return (
                  <div key={cl} className="project_coding_language_wrapper">
                    {" "}
                    <CodingLanguage lan={cl} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="project_icon_wrapper">
            <DisplayProjectIcon
              project_name={props.project.project_name}
              project_logo={props.project.project_logo}
            />
          </div>
        </div>{" "}
      </Link>
    );
  }
}

export default Project;
