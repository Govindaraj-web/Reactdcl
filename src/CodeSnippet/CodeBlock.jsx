import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function CodeBlock({ code, language = "javascript", theme }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const boxStyle = {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    marginBottom: "20px",
  };

  const btnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: copied ? "green" : "#444",
    color: "white",
    border: "none",
    padding: "5px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.85rem",
    zIndex: 1,
  };

  return (
    <div style={boxStyle}>
      <button onClick={handleCopy} style={btnStyle}>
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language={language}
        style={theme}
        customStyle={{ margin: 0, padding: "20px", fontSize: "0.9rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
