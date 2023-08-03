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

      <div className="about_information_container">
        <div className="text_wrapper_02">
          {/* <h1>{about_intro.information[0].info_title}</h1>
           */}
          <div className="information_wrapper_01">
            <h2>{about_intro.information[0].info_text[0].text_title}</h2>
            <ul>
              {" "}
              {about_intro.information[0].info_text[0].text?.map((text) => {
                return (
                  <li>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="information_wrapper_02">
            <h2>{about_intro.information[0].info_text[1].text_title}</h2>
            <div className="information_text_wrapper_01">
              <h3>
                {about_intro.information[0].info_text[1].text[0].cv_title}
              </h3>
              <ul>
                {about_intro.information[0].info_text[1].text[0].cv_text?.map(
                  (text) => {
                    return (
                      <li>
                        <p>{text}</p>
                      </li>
                    );
                  }
                )}
              </ul>

              <h3>
                {about_intro.information[0].info_text[1].text[1].cv_title}
              </h3>

              <h4>
                {" "}
                {
                  about_intro.information[0].info_text[1].text[1].cv_text[0]
                    .cv_sub_title
                }
              </h4>
              <ul>
                {about_intro.information[0].info_text[1].text[1].cv_text[0].cv_sub_text.map(
                  (text) => {
                    return (
                      <li>
                        <p>{text}</p>
                      </li>
                    );
                  }
                )}
              </ul>

              <h4>
                {" "}
                {
                  about_intro.information[0].info_text[1].text[1].cv_text[1]
                    .cv_sub_title
                }
              </h4>
              <ul>
                {about_intro.information[0].info_text[1].text[1].cv_text[1].cv_sub_text.map(
                  (text) => {
                    return (
                      <li>
                        <p>{text}</p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          <div className="information_wrapper_03">
            <h2>{about_intro.information[0].info_text[2].text_title}</h2>
            <ul>
              {" "}
              {about_intro.information[0].info_text[2].text?.map((text) => {
                return (
                  <li>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
