import AboutSVG from "../svgs/icon_about.svg";

function About(props) {
  if (!props) {
    return null;
  }

  const about_intro = props.data[0].introductions.find(
    (intro) => intro.introduction_name === "about"
  );

  return (
    <div className="Internship">
      <div className="internship_section_01">
        <div className="icon_wrapper_01">
          <img src={AboutSVG} alt="internship icon"></img>
        </div>
        <div className="text_wrapper_01">
          <h1>{about_intro.introduction_title}</h1>
          {about_intro.introduction_text?.map((text) => {
            return <p>{text}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
