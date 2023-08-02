import React, { useState } from "react";
import Projects_data from "../data/projects_data.json";
import Project from "./Project";
import CodingLanguage from "./CodingLanguage";

function AllProjects(props) {
  const [selectedCodingLanguage, setSelectedCodingLanguage] = useState(null);

  const all_projects = Projects_data[0].projects;
  let search_key = props.search_key;

  let searched_projects = filterProjects(all_projects, search_key);

  const getAllCodingLanguages = () => {
    const codingLanguagesSet = new Set();
    searched_projects.forEach((project) => {
      project.project_coding_languages.forEach((language) => {
        codingLanguagesSet.add(language);
      });
    });
    return Array.from(codingLanguagesSet);
  };

  const codingLanguages = getAllCodingLanguages();

  function filterProjects(projects, search_key) {
    let searched_projects_array = projects.filter((project) => {
      // Filter based on the selected coding language, if any
      if (
        selectedCodingLanguage &&
        !project.project_coding_languages.includes(selectedCodingLanguage)
      ) {
        return false;
      }

      const projectValues = Object.values(project);
      return projectValues.some(
        (value) =>
          (typeof value === "string" &&
            value.toLowerCase().includes(search_key.toLowerCase())) ||
          (Array.isArray(value) &&
            value.some(
              (item) =>
                typeof item === "string" &&
                item.toLowerCase().includes(search_key.toLowerCase())
            ))
      );
    });
    return searched_projects_array;
  }

  const handleCodingLanguageClick = (language) => {
    setSelectedCodingLanguage(
      language === selectedCodingLanguage ? null : language
    );
  };

  const handleShowAllProjects = () => {
    setSelectedCodingLanguage(null);
  };

  if (!props) {
    return null;
  }

  return (
    <div className="AllProjects">
      <div className="all-projects-stack-filter-wrapper">
        <button className="show-all-button" onClick={handleShowAllProjects}>
          All
        </button>

        <div className="button-outer-container">
          <div id="button-container" className="button-container">
            {/* ... Your buttons here ... */}

            {codingLanguages?.map((lang) => {
              return (
                <button
                  key={lang}
                  value={lang}
                  onClick={() => handleCodingLanguageClick(lang)}
                  className="undecorated-button"
                >
                  <CodingLanguage lan={lang} />
                </button>
              );
            })}

            {/* ... Your buttons here ... */}
          </div>
        </div>
      </div>

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
