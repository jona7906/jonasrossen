import LinkedinSvg from "../svgs/icon_linkedin.svg";
import EmailSvg from "../svgs/icon_email.svg";
import CallSmsSvg from "../svgs/icon_call_sms.svg";

import React, { useRef } from "react";
import copy from "clipboard-copy";

function ContactButton(props) {
  const emailRef = useRef(null);

  const contact_url = props.contact_text.split(": ")[1];
  const contact_text = props.contact_text.split(": ")[0];

  const handleCopyEmail = () => {
    if (emailRef.current) {
      const email = emailRef.current.innerText;
      copy(email);
    }
  };

  const handleLinkClick = (event) => {
    handleCopyEmail();
    event.preventDefault(); // Prevent default navigation behavior
  };

  let button = null;
  let Svg_img = null;
  if (contact_text === "LinkedIn") {
    Svg_img = LinkedinSvg;
    button = (
      <a href={contact_url}>
        <p>{contact_text}</p>
        <img src={Svg_img} alt={contact_text} />
      </a>
    );
  }

  if (contact_text === "Email") {
    Svg_img = EmailSvg;
    button = (
      <a href={contact_url} onClick={handleLinkClick}>
        <p ref={emailRef}>{contact_url}</p>
        <img src={Svg_img} alt={contact_text} />
      </a>
    );
  }

  if (contact_text === "Phone/Sms") {
    Svg_img = CallSmsSvg;
    button = (
      <a href={contact_url} onClick={handleLinkClick}>
        <p ref={emailRef}>{contact_url}</p>
        <img src={Svg_img} alt={contact_text} />
      </a>
    );
  }

  return <div className="ContactButton">{button}</div>;
}

export default ContactButton;
