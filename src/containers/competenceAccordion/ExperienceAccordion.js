import React from "react";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function renderElement(element) {
  switch (element.type) {
    case "h1":
      return <h1>{element.content}</h1>;
    case "p":
      return <p>{element.content}</p>;
    case "code":
      return (
        <div>
          <h2
            style={{
              color: "#E3405F",
            }}
          >
            {element.title}
          </h2>
          <p>{element.objectif}</p>
          <SyntaxHighlighter language="python" style={atomDark}>
            {element.code}
          </SyntaxHighlighter>
          {Array.isArray(element.explication) ? (
            <ul>
              {element.explication.map((item, index) => (
                <li key={index}>
                  <p>{item.title}</p>
                  <ul>
                    {item.content.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>{element.explication}</p>
          )}
        </div>
      );
    case "img":
      return (
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center",
          }}
        >
          <img
            style={{
              width: "30%",
            }}
            src={require(`../../assests/images/${element["filename"]}`)}
            alt={element.descrption}
          />
          <p>{element.descrption}</p>
        </div>
      );
    default:
      return null;
  }
}
function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {props.sections.map((section, index) => (
            <Panel
              className="accord-panel"
              title={section.title}
              key={index} // Clé unique pour chaque panel
            >
              {section.corpus.map((element, idx) => (
                <div key={`${index}-${idx}`}>{renderElement(element)}</div>
                // Utilisation de `index` et `idx` pour créer une clé unique
              ))}
            </Panel>
          ))}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
