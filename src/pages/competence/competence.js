import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/competenceAccordion/ExperienceAccordion.js";
import "./competence.css";
import { compentences, compentencesHeader } from "../../portfolio.js";
import { Fade } from "react-reveal";
import CompenteceImg from "./CompenteceImg";

function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <CompenteceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {compentencesHeader.title}
              </h1>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {compentencesHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div>
        <h1>Competence aquis lors du stage :</h1>
        <p>
          Au laboratoire FEMTO-ST, j'ai développé des modèles d'apprentissage
          fédéré pour optimiser la consommation et la production d'énergie
          solaire et éolienne, alliant analyse de données et intelligence
          artificielle.
        </p>
      </div>
      <ExperienceAccordion sections={compentences["sections"]} theme={theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
