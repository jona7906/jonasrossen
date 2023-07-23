import InternshipSVG from "../svgs/icon_internship.svg";

function Internship(props) {
  if (!props) {
    return null;
  }

  const internship_intro = props.data[0].introductions.find(
    (intro) => intro.introduction_name === "internship"
  );

  return (
    <div className="Internship">
      <div className="internship_section_01">
        <div className="icon_wrapper_01">
          <img src={InternshipSVG} alt="internship icon"></img>
        </div>
        <div className="text_wrapper_01">
          <h1>{internship_intro.introduction_title}</h1>
          {internship_intro.introduction_text?.map((text) => {
            return <p>{text}</p>;
          })}
        </div>
      </div>

      <div className="internship_section_02">
        <h1>{internship_intro.information[0].info_title}</h1>
        <ul>
          {internship_intro.information[0].info_text?.map((text) => {
            return <li>{text}</li>;
          })}
        </ul>
      </div>
      <div className="internship_section_03">
        <h1>{internship_intro.information[1].info_title}</h1>
        <ul>
          {internship_intro.information[1].info_text?.map((text) => {
            return <li>{text}</li>;
          })}
        </ul>
      </div>
      <div className="internship_section_04">
        <h1>{internship_intro.information[2].info_title}</h1>

        <h2>{internship_intro.information[2].info_text[0].links_title}</h2>
        <ul>
          {internship_intro.information[2].info_text[0].links?.map((link) => {
            return (
              <li>
                <a href={link}>{link}</a>
              </li>
            );
          })}
        </ul>

        <h2>{internship_intro.information[2].info_text[1].links_title}</h2>
        <ul>
          {internship_intro.information[2].info_text[1].links?.map((link) => {
            return (
              <li>
                <a href={link.split(" - ")[1]}>{link.split(" - ")[0]}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Internship;
