import CodingLanguage from "./CodingLanguage.js";
import DisplayProjectIcon from "./DisplayProjectIcon.js";
import "../styles/Project.css";

function Project(props) {
  if (!props.project) {
    return null;
  } else {
    return (
      <div className={props.project.project_name + "_wrapper"}>
        <div className="project_icon_wrapper">
          <DisplayProjectIcon
            project_name={props.project.project_name}
            project_logo={props.project.project_logo}
          />
        </div>
        <h1>{props.project.project_name}</h1>
        <h1>{props.project.project_description}</h1>

        {props.project.project_coding_languages?.map((cl) => {
          /* console.log(cl); */
          return (
            <div key={cl} className="project_coding_language_wrapper">
              {" "}
              <CodingLanguage lan={cl} />
            </div>
          );
        })}

        <h1>{props.project.project_repository}</h1>
      </div>
    );
  }
}

export default Project;
