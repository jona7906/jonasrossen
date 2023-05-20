import Projects_data from "../data/projects_data.json";
import Project from "./Project";

import "../styles/AllProjects.css";

function AllProjects() {
  let all_projects = Projects_data[0].projects;

  console.log(all_projects);

  return (
    <div className="AllProjects">
      {all_projects?.map((project) => {
        return (
          <div key={project.project_name} className="project_wrapper">
            <Project key={project.project_logo} project={project}></Project>
          </div>
        );
      })}
    </div>
  );
}

export default AllProjects;
