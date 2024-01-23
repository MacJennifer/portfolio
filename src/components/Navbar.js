import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import message from "../assets/images/message.png";
import "../style/_navBar.scss";

const Navbar = () => {
  const handleEmailLogoClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:macaire.jennifer@sfr.fr`;
  };

  return (
    <div className="containerNav">
      <a href="https://github.com/MacJennifer">
        <img src={github} alt="logo github" />
      </a>
      <a href="https://www.linkedin.com/in/jennifermacaire/">
        <img src={linkedin} alt="logo linkedin" />
      </a>
      <a href="#contact" onClick={handleEmailLogoClick}>
        <img src={message} alt="logo message" />
      </a>
    </div>
  );
};

export default Navbar;
