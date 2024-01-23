import React from "react";
import image from "../assets/images/Lara2.jpg";
import logoLaravel from "../assets/images/laravel.png";
import logoReact from "../assets/images/react.png";
import logoProjet from "../assets/images/web.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LogoCompetence from "../components/LogoCompetence";
import Navbar from "../components/Navbar";
import "../style/style.scss";

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="presentation">
          <div className="title">
            <h1>Bienvenue sur mon portfolio !</h1>
            <article>
              Bonjour, je suis{" "}
              <strong className="name">Macaire Jennifer</strong> une
              développeuse passionnée. Bienvenue dans mon espace numérique où le
              code prend vie et les idées prennent forme. Découvrez mes
              compétences et les projets qui m'inspirent.
            </article>
          </div>

          <div className="photo">
            <img src={image} alt=" moi " />
          </div>
        </div>
      </header>
      <section className="competences">
        <h2>Compétences</h2>
        <LogoCompetence />
      </section>
      <section className="projets">
        <h2>Projets</h2>
        <div className="containerProjets">
          <div className="cardProjet1">
            <div className="logoProjet1">
              <img src={logoProjet} alt="icone de site web" />
              <div className="h3Projets">
                <h3>Site vitrine</h3>
              </div>
            </div>
            <div className="containerLogo">
              <div className="reactProjets">
                <img src={logoReact} alt="icon react" />
                <span>React</span>
              </div>
              <div className="laravelProjets">
                <img src={logoLaravel} alt="icon laravel" />
                <span>Laravel</span>
              </div>
            </div>
          </div>
          <div className="cardProjet1">
            <div className="logoProjet1">
              <img src={logoProjet} alt="icone de site web" />
              <div className="h3Projets">
                <h3>Site vitrine</h3>
              </div>
            </div>
            <div className="containerLogo">
              <div className="reactProjets">
                <img src={logoReact} alt="icon react" />
                <span>React</span>
              </div>
              <div className="laravelProjets">
                <img src={logoLaravel} alt="icon laravel" />
                <span>Laravel</span>
              </div>
            </div>
          </div>
          <div className="cardProjet1">
            <div className="logoProjet1">
              <img src={logoProjet} alt="icone de site web" />
              <div className="h3Projets">
                <h3>Site vitrine</h3>
              </div>
            </div>
            <div className="containerLogo">
              <div className="reactProjets">
                <img src={logoReact} alt="icon react" />
                <span>React</span>
              </div>
              <div className="laravelProjets">
                <img src={logoLaravel} alt="icon laravel" />
                <span>Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
