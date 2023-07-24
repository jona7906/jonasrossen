import Projects_data from "../data/projects_data.json";
import Project from "./Project";

function AllProjects(props) {
  if (!props) {
    return null;
  }
  const all_projects = Projects_data[0].projects;

  let searched_projects = all_projects.filter((project) => {
    const projectValues = Object.values(project);
    return projectValues.some(
      (value) =>
        (typeof value === "string" &&
          value.toLowerCase().includes(props.search_key.toLowerCase())) ||
        (Array.isArray(value) &&
          value.some(
            (item) =>
              typeof item === "string" &&
              item.toLowerCase().includes(props.search_key.toLowerCase())
          ))
    );
  });

  console.log(searched_projects);
  console.log(all_projects);

  return (
    <div className="AllProjects">
      {searched_projects?.map((project) => {
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
