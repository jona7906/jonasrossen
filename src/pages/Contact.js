import ContactSVG from "../svgs/icon_contact.svg";
import ContactButton from "../components/ContactButton";

function Contact(props) {
  if (!props) {
    return null;
  }

  const contact_intro = props.data[0].introductions.find(
    (intro) => intro.introduction_name === "contact"
  );

  return (
    <div className="Internship">
      <div className="internship_section_01">
        <div className="icon_wrapper_01">
          <img src={ContactSVG} alt="contact icon"></img>
        </div>
        <div className="text_wrapper_01">
          <h1>{contact_intro.introduction_title}</h1>
          {contact_intro.introduction_text?.map((text, index) => {
            if (index <= 1) return <p>{text}</p>;
            else return null;
          })}

          <div className="contact_wrapper">
            {contact_intro.introduction_text?.map((text, index) => {
              if (index > 1) return <ContactButton contact_text={text} />;
              else return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
