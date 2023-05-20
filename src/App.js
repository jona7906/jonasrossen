import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Internship from "./pages/Internship";

/* import NoPage from "../pages/NoPage"; */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="internship" element={<Internship />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
