import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import EmailSvg from "../svgs/icon_email.svg";
import ExitButton from "../svgs/exit_button.svg";
function Contact(props) {
  const [showContactForm, setShowContactForm] = useState(false);

  if (!props) {
    return null;
  }

  const contact_intro = props.data[0].introductions.find(
    (intro) => intro.introduction_name === "contact"
  );

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="Internship">
      <div className="internship_section_01">
        <div className="icon_wrapper_01">
          <img src={EmailSvg} alt="email icon"></img>
        </div>
        <div className="text_wrapper_01">
          <h1>{contact_intro.introduction_title}</h1>
          {contact_intro.introduction_text?.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}

          <div className="contact_wrapper">
            <button onClick={toggleContactForm}>
              <p>Contact</p> <img src={EmailSvg} alt="email icon" />
            </button>
            {showContactForm && (
              <div className="contact_form_wrapper">
                <div className="form_wrapper">
                  <button onClick={handleCloseContactForm}>
                    <img src={ExitButton} alt="exit" />
                  </button>
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
