import React from "react";
import figma from "../assets/images/figma.png";
import laravel from "../assets/images/laravel.png";
import react from "../assets/images/react.png";
import symfony from "../assets/images/symfony.png";

const LogoCompetence = () => {
  return (
    <div className="containerLogoCompetence">
      <div className="figma">
        <img src={figma} alt="logo de Figma" />
        <span>Figma</span>
      </div>
      <div className="React">
        <img src={react} alt="logo de React" />
        <span>React</span>
      </div>
      <div className="symfony">
        <img src={symfony} alt="logo de Symfony" />
        <span>Symfony</span>
      </div>
      <div className="laravel">
        <img src={laravel} alt="logo de Laravel" />
        <span>Laravel</span>
      </div>
    </div>
  );
};

export default LogoCompetence;
