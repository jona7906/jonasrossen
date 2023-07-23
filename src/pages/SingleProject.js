import DisplayProjectIcon from "../components/DisplayProjectIcon";
import CodingLanguage from "../components/CodingLanguage";
import DisplayIcon from "../components/DisplayIcon";

function SingleProject(props) {
  if (!props) {
    return null;
  }

  return (
    <div className="SingleProject">
      <div className="single_project_stack_section">
        <div className="single_project_stack_section_wrapper">
          {props.project.project_coding_languages?.map((cl) => {
            return (
              <div key={cl} className="single_project_coding_language_wrapper">
                <CodingLanguage lan={cl} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="single_project_section_01">
        <div className="icon_wrapper_01">
          <DisplayProjectIcon
            project_name={props.project.project_name}
            project_logo={props.project.project_logo}
          />
        </div>
        <div className="text_wrapper_01">
          <h1>{props.project.project_title}</h1>

          {props.project.project_description?.map((desc) => {
            return <p>{desc}</p>;
          })}

          {/* {DisplayText(props.project.project_description)}
           */}
          <div className="repo_link_wrapper">
            <h3>Repository:</h3>
            <p>
              {props.project.project_repository?.map((pr) => {
                return (
                  <a href={pr.repo_link}>
                    <CodingLanguage lan={pr.repo} />
                  </a>
                );
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="single_project_section_02">
        {props.project.project_videos.map((video) => {
          return (
            <a href={video.url}>
              <div className="video_wrapper">
                <DisplayIcon icon="Youtube" key="Youtube" />
              </div>
            </a>
          );
        })}
      </div>
      {/*  <div className="single_project_section_03">
        <h1>section three</h1>
      </div> */}
    </div>
  );
}

export default SingleProject;
