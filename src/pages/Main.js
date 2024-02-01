import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="Main">
      <div className="content">
        <h1 className="title">Welcome to My World of Code</h1>
        <p className="intro">
          Greetings! I'm Jonas Rossen, a Web Artisan, weaving digital dreams
          into reality.
          <br></br> Dive into my digital canvas and explore the brushstrokes of
          my projects
        </p>
        <Link to="/portfolio" alt="portfolio" className="cta-button">
          Embark on the Journey
        </Link>{" "}
      </div>
    </div>
  );
}

export default Main;
