/* import ReactDOM from "react-dom"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
/* import Internship from "./pages/Internship"; */
import SingleProject from "./pages/SingleProject";
import Projects_data from "./data/projects_data";
/* import NoPage from "../pages/NoPage"; */

export default function App() {
  const all_projects = Projects_data[0].projects;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {/*   <Route
            path="internship"
            element={<Internship data={Projects_data} />}
          /> */}
          <Route
            path="portfolio"
            element={<Portfolio data={Projects_data} />}
          />
          <Route path="about" element={<About data={Projects_data} />} />
          <Route path="contact" element={<Contact data={Projects_data} />} />
          {all_projects?.map((project) => {
            return (
              <Route
                path={project.project_name}
                element={
                  <SingleProject key={project.project_logo} project={project} />
                }
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/* ReactDOM.render(<App />, document.getElementById("root")); */
