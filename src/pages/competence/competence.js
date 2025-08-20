import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CompetenceAccordion from "../../containers/competenceAccordion/CompetenceAccordion.js";
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
      {/* <section className="competence-intro">
        <div className="competence-intro-card" style={{background: theme.imageDark ? theme.imageDark : "#1d1d1d"}}>
          <h2 className="competence-intro-title">Contexte Synthétique</h2>
          <p className="competence-intro-text">
            Optimops est un outil interne conçu pour moderniser l'analyse opérationnelle du SDIS&nbsp;25 : centralisation, visualisation interactive, génération automatisée de rapports PDF et préparation d'un module futur de simulation des moyens. Cette section détaille les compétences développées autour de deux axes principaux :<br/>
            <strong>Compétence A</strong> – Réalisation d'un développement d'application (refonte front/back, optimisation, modularisation) et <strong>Compétence AC</strong> – Conduite de projet & collaboration (organisation, validation utilisateur, déploiement). Les contenus ci‑dessous présentent traces, analyses critiques et synthèse d'impact.
          </p>
          <ul className="competence-keypoints">
            <li>Refonte progressive d'un prototype vers une application structurée</li>
            <li>Interfaces métier ergonomiques validées par maquettes</li>
            <li>Optimisation des temps d'accès (&lt;1s sur vues critiques)</li>
            <li>Automatisation documentaire (rapports PDF stables)</li>
            <li>Architecture prête pour évolutions (widgets personnalisables)</li>
            <li>Collaboration multi-acteurs & adaptation du discours</li>
          </ul>
        </div>
      </section> */}
      <CompetenceAccordion sections={compentences["sections"]} theme={theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
