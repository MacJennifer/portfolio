import React from "react";
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
          <h1>Bienvenue sur mon portfolio !</h1>
          <article>
            Bonjour, je suis <strong className="name">Macaire Jennifer</strong>
            une développeuse passionnée. Bienvenue dans mon espace numérique où
            le code prend vie et les idées prennent forme. Découvrez mes
            compétences et les projets qui m'inspirent.
          </article>
        </div>
        <div className="photo">
          <img src="" alt="photo de moi " />
        </div>
      </header>
      <section className="competences">
        <h2>Compétences</h2>
        <LogoCompetence />
      </section>
      <section className="projets">
        <h2>Projets</h2>
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
