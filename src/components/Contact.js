import React from "react";
import message from "../assets/images/message.png";
import EmailLink from "./EmailLink";

const Contact = () => {
  return (
    <div className="containerContact">
      <div className="logoMessage">
        <img src={message} alt="logo de message" />
      </div>
      <div className="emailMessage">
        <EmailLink />
      </div>
    </div>
  );
};

export default Contact;
