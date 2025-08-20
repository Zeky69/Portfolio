import React from "react";
import "./CompetenceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function renderElement(element, codeStyle) {
  switch (element.type) {
    case "h1":
      return <h1 className="acc-h1">{element.content}</h1>;
    case "p":
      return <p className="acc-paragraph">{element.content}</p>;
    case "ul":
      return (
        <ul className="acc-list">
          {element.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div className="acc-code-block">
          {element.title && <h2 className="acc-code-title">{element.title}</h2>}
          {element.objectif && (
            <p className="acc-code-objectif">{element.objectif}</p>
          )}
          <SyntaxHighlighter
            language={element.language || "python"}
            style={codeStyle}
            customStyle={{
              borderRadius: "10px",
              fontSize: "0.85rem",
              padding: "18px 20px",
              lineHeight: 1.5,
              margin: "12px 0 18px",
            }}
            wrapLines
            showLineNumbers
          >
            {element.code}
          </SyntaxHighlighter>
          {Array.isArray(element.explication) ? (
            <ul className="acc-explain-list">
              {element.explication.map((item, index) => (
                <li key={index}>
                  <p className="acc-explain-title">{item.title}</p>
                  <ul className="acc-nested-points">
                    {item.content.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : element.explication ? (
            <p className="acc-explain-text">{element.explication}</p>
          ) : null}
        </div>
      );
    case "img":
      return (
        <figure className="acc-image-wrapper">
          <img
            className="acc-image"
            src={require(`../../assests/images/${element["filename"]}`)}
            alt={element.descrption}
          />
          {element.descrption && (
            <figcaption className="acc-image-caption">
              {element.descrption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

function CompetenceAccordion(props) {
  const theme = props.theme;
  const codeStyle = theme.name === "light" ? oneLight : atomDark;

  return (
    <div
      className={`experience-accord ${
        theme.name === "light" ? "light" : "dark"
      }`}
    >
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion
          onChange={({ expanded }) => console.log(expanded)}
          overrides={{
            Root: {
              style: {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          {props.sections.map((section, index) => (
            <Panel
              key={index}
              className="accord-panel"
              title={
                <div className="panel-title-wrapper">
                  <span className="panel-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="panel-title-text">{section.title}</span>
                </div>
              }
              overrides={{
                Header: {
                  style: ({ $expanded }) => ({
                    background: $expanded
                      ? "linear-gradient(135deg, rgba(226,64,95,0.18) 0%, rgba(226,64,95,0.05) 100%)"
                      : "transparent",
                    borderRadius: $expanded ? "14px 14px 0 0" : "14px",
                    padding: "18px 24px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    transition: "all .35s cubic-bezier(.4,0,.2,1)",
                    boxShadow: $expanded
                      ? "0 4px 30px -8px rgba(226,64,95,0.45)"
                      : "0 2px 8px -4px rgba(0,0,0,0.4)",
                  }),
                },
                Content: {
                  style: ({ $expanded }) => ({
                    background: theme.name === "light" ? "#ffffff" : "#141414",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderTop: "none",
                    borderRadius: "0 0 14px 14px",
                    padding: $expanded ? "8px 32px 32px" : 0,
                    overflow: "hidden",
                  }),
                },
                ToggleIcon: {
                  style: ({ $expanded }) => ({
                    transform: $expanded ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform .35s ease",
                  }),
                },
              }}
            >
              <div className="panel-inner">
                {section.corpus.map((element, idx) => (
                  <div key={`${index}-${idx}`} className="panel-element">
                    {renderElement(element, codeStyle)}
                  </div>
                ))}
              </div>
            </Panel>
          ))}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default CompetenceAccordion;
// End of file
