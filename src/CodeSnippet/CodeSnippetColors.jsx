import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeSnippetColors() {
   const codeSample = `console.log("Hello, * Themes!");`;

  // Array of all theme names you want to use
  const themeNames = [
    "a11yDark", "a11yLight", "atomDark", "base16AteliersulphurpoolLight",
    "cb", "coldarkCold", "coldarkDark", "coy", "coyWithoutShadows",
    "dark", "dracula", "duotoneDark", "duotoneEarth", "duotoneForest",
    "duotoneLight", "duotoneSea", "duotoneSpace", "funky", "ghcolors",
    "gruvboxDark", "gruvboxLight", "holiTheme", "hopscotch", "lucario",
    "materialDark", "materialLight", "materialOceanic", "nightOwl", 
    "nord", "okaidia", "oneDarkPro", "oneLight", "panda", "pojoaque", 
    "prism", "shadesOfPurple", "solarizedDark", "solarizedDarkAtom", 
    "solarizedLight", "synthWave84", "vs", "vsDark", "xonokai", "zTouch"
  ];

  // Create snippets array dynamically
  const snippets = themeNames.map(name => ({
    color: name,
    code: codeSample,
    theme: themes[name] || themes.dracula  // fallback if theme not found
  }));

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const boxStyle = {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    marginBottom: "20px",
  };

  const btnStyle = (isCopied) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    background: isCopied ? "green" : "#444",
    color: "white",
    border: "none",
    padding: "5px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.85rem",
    zIndex: 1,
  });

  return (
    <div>
      {snippets.map((item, index) => (
        <div key={index} style={boxStyle}>
          <h3>{item.color}</h3>
          <button
            onClick={() => handleCopy(item.code, index)}
            style={btnStyle(copiedIndex === index)}
          >
            {copiedIndex === index ? "Copied!" : "Copy"}
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={item.theme}
            customStyle={{ margin: 0, padding: "20px", fontSize: "0.9rem" }}
          >
            {item.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}


export default CodeSnippetColors